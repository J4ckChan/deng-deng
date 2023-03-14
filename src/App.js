import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import SpeechTopicPage from "./Components/SpeechTopic/SpeechTopicPage";
import SpeechPicturePage from "./Components/SpeechPicture/SpeechPicturePage";
import CollectionView from "./Components/UI/CollectionView/CollectionView";
import WriteSentencePage from "./Components/WriteSentence/WriteSentencePage";
import WordDiscriminationPage from "./Components/WordDiscrimination/WordDiscriminationPage";
import ListenToDistinguishWordsPage from "./Components/ListenToDistinguishWords/ListeningToDistinguishWordsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/collectionview" element={<CollectionView />}></Route>
      <Route path="/speechtopicpage" element={<SpeechTopicPage />}></Route>
      <Route path="/speechpicturepage" element={<SpeechPicturePage />}></Route>
      <Route path="/writesentence" element={<WriteSentencePage />}></Route>
      <Route
        path="/worddiscrimination"
        element={<WordDiscriminationPage />}
      ></Route>
      <Route
        path="/listentodistinguishwords"
        element={<ListenToDistinguishWordsPage />}
      ></Route>
    </Routes>
  );
}

export default App;
