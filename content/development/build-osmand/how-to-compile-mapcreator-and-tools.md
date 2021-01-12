---
title: How to Compile the Android Version
versions: '*'
---

1. First setup the **development environment**, see {% link /setup-the-dev-environment %}.
2. **Gradle** (command line):
    - Compile with command line 
    ```
    cd tools/java-tools && ../gradlew build
    ```
    - OsmAndMapCreator.zip will be produced with all scripts inside
    **Note**: android project is required to build tools (it uses OsmAnd-java project).
3. **Eclipse**:
    - Preconfigure eclipse projects
    ```
    cd tools/java-tools && ../gradlew cleanEclipse eclipse
    ```
    - In Eclipse 'Import' - 'Existing projects in workspace' select folders 'OsmAnd-java', 'OsmAndMapCreatorutilities', 'OsmAndMapCreator', 'OsmAndServer', 'OsmAndServerUtilties'.
    **Note**: don't select top folder java-tools and instead select specified above projects.    
4. Android Studio / Idea
    Feel free to make pull request to this documentation and describe how it could be done.
5. Main classes to execute from IDE:
   - net.osmand.MainUtilities - represents utilities.sh and leads to all possible utilties.
   - net.osmand.obf.BinaryInspector - inspector.sh utility to read OBF files and gives information about it.
   - net.osmand.obf.preparation.IndexCreator - shortcut to generate obf file.
   - net.osmand.swing.OsmExtractionUI - OsmAndMapCreator
