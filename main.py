import html

import folium
import pandas as pd
import streamlit as st
from streamlit_folium import st_folium

st.set_page_config(page_title="Cell Dump Analyzer", layout="wide")

st.title("📱 Cell Dump & CDR Analysis Tool")
st.markdown(
    "Unggah data *cell dump* (format CSV/Excel) untuk melakukan analisis lokasi, "
    "target, dan pola komunikasi."
)

uploaded_file = st.file_uploader(
    "Unggah File Cell Dump (CSV atau Excel)", type=["csv", "xlsx"]
)

if uploaded_file is None:
    st.info("Silakan unggah file *cell dump* terlebih dahulu melalui panel di atas.")
else:
    try:
        if uploaded_file.name.lower().endswith(".csv"):
            df = pd.read_csv(uploaded_file)
        else:
            df = pd.read_excel(uploaded_file)
    except (pd.errors.ParserError, ValueError, OSError) as error:
        st.error(f"File tidak dapat dibaca: {error}")
        st.stop()

    if df.empty or len(df.columns) == 0:
        st.warning("File tidak berisi data atau kolom yang dapat dianalisis.")
        st.stop()

    st.success(f"Berhasil memuat {len(df)} baris data.")

    with st.expander("🔍 Lihat Preview Data Mentah"):
        st.dataframe(df.head())

    st.sidebar.header("Filter Analisis")
    columns = df.columns.tolist()

    msisdn_default = columns.index("MSISDN") if "MSISDN" in columns else 0
    imei_default = columns.index("IMEI") if "IMEI" in columns else min(1, len(columns) - 1)
    msisdn_col = st.sidebar.selectbox(
        "Pilih Kolom Nomor (MSISDN)", columns, index=msisdn_default
    )
    imei_col = st.sidebar.selectbox("Pilih Kolom IMEI", columns, index=imei_default)
    target_number = st.sidebar.text_input("Cari Nomor Target (MSISDN / IMEI):", "")

    filtered_df = df.copy()
    if target_number:
        matching_number = (
            filtered_df[msisdn_col].astype("string").str.contains(
                target_number, case=False, na=False, regex=False
            )
            | filtered_df[imei_col].astype("string").str.contains(
                target_number, case=False, na=False, regex=False
            )
        )
        filtered_df = filtered_df[matching_number]

    col1, col2, col3 = st.columns(3)
    col1.metric("Total Record", len(filtered_df))
    col2.metric("Target Unik (MSISDN)", filtered_df[msisdn_col].nunique())
    col3.metric(
        "Menara BTS Unik",
        filtered_df["Tower_ID"].nunique() if "Tower_ID" in filtered_df else 0,
    )

    tab1, tab2, tab3 = st.tabs(
        ["🗺️ Peta Lokasi (Mapping)", "📊 Analisis Frekuensi", "📋 Data Terfilter"]
    )

    with tab1:
        st.subheader("Visualisasi Sebaran Lokasi BTS")
        if {"Lat", "Long"}.issubset(filtered_df.columns):
            locations = filtered_df.copy()
            locations["Lat"] = pd.to_numeric(locations["Lat"], errors="coerce")
            locations["Long"] = pd.to_numeric(locations["Long"], errors="coerce")
            locations = locations.dropna(subset=["Lat", "Long"])
            locations = locations[
                locations["Lat"].between(-90, 90)
                & locations["Long"].between(-180, 180)
            ]

            if locations.empty:
                st.warning("Tidak ada koordinat valid untuk ditampilkan pada peta.")
            else:
                map_lat = locations["Lat"].mean()
                map_lon = locations["Long"].mean()
                map_view = folium.Map(location=[map_lat, map_lon], zoom_start=13)

                for _, row in locations.iterrows():
                    msisdn = html.escape(str(row.get(msisdn_col, "-")))
                    timestamp = html.escape(str(row.get("Timestamp", "-")))
                    tower_id = html.escape(str(row.get("Tower_ID", "-")))
                    popup_text = (
                        f"MSISDN: {msisdn}<br>Waktu: {timestamp}<br>BTS: {tower_id}"
                    )
                    folium.CircleMarker(
                        location=[row["Lat"], row["Long"]],
                        radius=5,
                        color="red",
                        fill=True,
                        fill_color="red",
                        popup=folium.Popup(popup_text, max_width=300),
                    ).add_to(map_view)

                st_folium(map_view, width=1000, height=500)
        else:
            st.warning(
                "Kolom 'Lat' dan 'Long' tidak ditemukan dalam dataset untuk membuat peta."
            )

    with tab2:
        st.subheader("Statistik Komunikasi & Aktivitas")
        top_numbers = filtered_df[msisdn_col].value_counts().head(10)
        st.write("**Nomor Paling Sering Muncul (Top 10):**")
        st.bar_chart(top_numbers)

        if "Tower_ID" in filtered_df.columns:
            top_towers = filtered_df["Tower_ID"].value_counts().head(10)
            st.write("**BTS Paling Sering Terhubung (Top 10):**")
            st.bar_chart(top_towers)

    with tab3:
        st.subheader("Tabel Data Terfilter")
        st.dataframe(filtered_df)

        csv = filtered_df.to_csv(index=False).encode("utf-8")
        st.download_button(
            label="Unduh Data Terfilter (CSV)",
            data=csv,
            file_name="hasil_analisa_cell_dump.csv",
            mime="text/csv",
        )
