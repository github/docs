import streamlit as st
import pickle
import pandas as pd
import requests

def fetch_movie_id(movie_title):
    response = requests.get("https://api.themoviedb.org/3/search/movie?api_key=2eec5cadfef931cf08e9b0805fe12e88&query={}".format(movie_title))
    data = response.json()
    if data['results']:
        return data['results'][0]['id']
    else:
        return None

def fetch_poster(movie_id):
    response = requests.get("https://api.themoviedb.org/3/movie/{}?api_key=2eec5cadfef931cf08e9b0805fe12e88".format(movie_id))
    data = response.json()
    print(data)  # Add this line to print the API response
    if 'poster_path' in data and data['poster_path'] is not None:
        return "https://image.tmdb.org/t/p/w185/" + data['poster_path']
    else:
        print("Poster not available for movie ID:", movie_id)
        return "https://via.placeholder.com/185x278"  # Use a default image URL

def recommend(movie):
    if not movie:
        return []
    if movie not in movies_lists:
        return []
    movie_index = movies_lists.tolist().index(movie)
    distance = similarity[movie_index]
    movie_list = sorted(list(enumerate(similarity[movie_index])), reverse=True, key=lambda x:x[1])[1:6]
    recommended_movies = [movies_lists[i[0]] for i in movie_list]
    recommended_movies_poster = []
    for movie in recommended_movies:
        movie_id = fetch_movie_id(movie)
        if movie_id:
            poster = fetch_poster(movie_id)
            print(movie_id)  # Add this line to print the movie ID
            recommended_movies_poster.append(poster)
        else:
            recommended_movies_poster.append("https://via.placeholder.com/185x278")  # Use a default image URL
    return recommended_movies, recommended_movies_poster

movies_lists = pickle.load(open('movies.pkl','rb'))
movies_lists = movies_lists["title"].values
similarity = pickle.load(open('similarity.pkl','rb'))

st.title('Movie Recommender System')
Selected_Movie_Name   = st.selectbox('How would you like to be connected ?', movies_lists)

if st.button('Recommend'):
    names, poster = recommend(Selected_Movie_Name)
    row = st.container()
    with row:
        cols = st.columns(5)
        for i in range(5):
            with cols[i]:
                st.write(f"<h5 style='text-align: center; width: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'>{names[i]}</h5>", unsafe_allow_html=True)
                st.image(poster[i])
