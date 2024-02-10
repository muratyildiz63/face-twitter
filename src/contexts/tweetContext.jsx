import { useState, createContext, useContext, useEffect, createRef } from "react";
import { useScreenshot } from 'use-react-screenshot'
import { useRef } from "react";

const TweetContext = createContext();

const TweetProvider = ({ children }) => {
    const [name, setName] = useState("Ad alanı");
    const [username, setUsername] = useState("kullanıcı adı");
    const [tweet, setTweet] = useState("Bu Alana Tweet yazılamcaktır");
    const [comment, setComment] = useState(3155);
    const [retweet, setRetweet] = useState(5500);
    const [like, setLike] = useState(30);
    const [save, setSave] = useState(30);
    const [avatar, setAvatar] = useState();

    const dowlandRef = createRef()
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(tweetRef.current)
    const tweetRef = useRef()

    useEffect(() => {
        if(image){

            dowlandRef.current.click()
        }
    }, [image])

    const values = {
        name,
        setName,
        username,
        setUsername,
        tweet,
        setTweet,
        comment,
        setComment,
        retweet,
        setRetweet,
        like,
        setLike,
        save,
        setSave,
        avatar,
        setAvatar,
        image,
        takeScreenshot,
        getImage,
        tweetRef,
        dowlandRef

    };
    return <TweetContext.Provider value = { values } > { children } </TweetContext.Provider>;
};
const useTweet = () => useContext(TweetContext);
export { useTweet, TweetProvider };