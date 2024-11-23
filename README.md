# frontEndAssignment-Jivus-AI


## Overview
This project is a web application designed to allow users to record audio through a microphone component, transcribe the audio using the Deepgram API, and display the transcription in real-time. The application also maintains a record of past transcriptions and provides a user-friendly interface using Bootstrap. Built with React functional components and hooks, this project aims to demonstrate real-time audio recording, transcription, and interaction.

## Core Features
- **Microphone Component**: 
    - Users can start and stop audio recording with the microphone button.
    - Visual feedback indicates whether recording is in progress or stopped.

- **Audio Transcription**:
    - Utilizes the Deepgram API for real-time transcription of the recorded audio.
    - The transcription appears on the screen as the audio is processed.

- **Past Transcriptions**:
    - The application saves and displays previous transcriptions for easy reference.

- **Responsive UI**:
    - The application is designed to work well on various screen sizes, providing a clean and intuitive user experience.

## Tech Stack
The project uses the following technologies and tools:

- **Frontend**:
    - React: Used for creating functional components and hooks for dynamic content.
    - Bootstrap: A CSS framework for responsive and clean UI design.

- **Backend Integration**:
    - Deepgram API: Provides real-time audio transcription via WebSocket connection.
    - Web Audio API: Handles the recording of audio from the user's microphone.

- **Other Tools**:
    - JavaScript (ES6+): Core programming language used for implementing functionality.
    - HTML5: For structuring the web page and embedding elements.
    - CSS: For basic styling alongside Bootstrap.

## Completed Tasks
- **Task 1 - Microphone Component**:
    - Implemented a microphone button that starts and stops the recording.
    - Added visual feedback to indicate whether the recording is active or stopped.

- **Task 2 - Real-time Audio Transcription**:
    - Integrated Deepgram's API to transcribe audio in real time.
    - Set up WebSocket communication for streaming audio data to Deepgram and receiving transcriptions.

- **Task 3 - Transcription Display**:
    - Displayed the transcribed text in a scrollable box on the web page.
    - Transcriptions are updated in real-time as audio is being processed.

- **Task 4 - Storing Past Transcriptions**:
    - Added functionality to store and display past transcriptions for easy access.
    - Past transcriptions are displayed in a list, allowing users to view previous recordings.

- **Task 5 - Responsive UI with Bootstrap**:
    - Styled the application with Bootstrap to ensure it works well across different devices and screen sizes.

## Development Roadmap
1. **Phase 1**: Implement microphone button and Web Audio API integration for recording.
2. **Phase 2**: Set up Deepgram API for real-time transcription using WebSocket.
3. **Phase 3**: Display transcribed text on the UI and ensure smooth user interaction.
4. **Phase 4**: Add features to save past transcriptions for future access.
5. **Phase 5**: Enhance UI with Bootstrap for responsive and intuitive design.

##Future Enhancements
- Language Support: Add support for multiple languages in the Deepgram transcription process.
- Transcript Export: Allow users to export their transcriptions as text files.
- Dark Mode: Implement a toggle for dark mode for a better user experience.

##Deepgram API Setup 
- https://developers.deepgram.com/docs
- https://youtu.be/kIyPX16zuQY?si=o8nq0jp25ZxOtEHD

##Author
- Mustafa - Frontend Developer and Contributor



