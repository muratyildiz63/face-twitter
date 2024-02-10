import { useTweet } from "../contexts/tweetContext";

function Update() {
  const {
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
    getImage,
    image,
    setAvatar,
    dowlandRef
  } = useTweet();
  const avatarHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };
  return (
    <div className="tweet-update">
      <ul>
        <li>
          <label htmlFor="">Görsel</label>
          <input type="file" onChange={avatarHandle} />
        </li>
        <li>
          <label htmlFor="">Ad Giriniz</label>
          <input
            type="text"
            value={name}
            placeholder={"Ad Yazınız"}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="">Kullanıcı Adı Giriniz</label>
          <input
            type="text"
            value={username}
            placeholder={"Kullanıcı adını Yazınız"}
            onChange={(e) => setUsername(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="">Tweet Giriniz</label>
          <textarea
            type="text"
            value={tweet}
            placeholder={"Tweet  Yazınız"}
            onChange={(e) => setTweet(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="">Yorum sayısı Giriniz</label>
          <input
            type="number"
            value={comment}
            placeholder={"Yorum sayısı Yazınız"}
            onChange={(e) => setComment(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="">Retweet sayısı Giriniz</label>
          <input
            type="number"
            value={retweet}
            placeholder={"  Retweet sayısı  Giriniz"}
            onChange={(e) => setRetweet(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="">Beğeni sayısı Giriniz</label>
          <input
            type="number"
            value={like}
            placeholder={"  Retweet sayısı  Giriniz"}
            onChange={(e) => setLike(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="">Kaydet sayısı Giriniz</label>
          <input
            type="number"
            value={save}
            placeholder={"  Retweet sayısı  Giriniz"}
            onChange={(e) => setSave(e.target.value)}
          />
        </li>
        <li>
          <button onClick={getImage}>Ekran Görseli Al</button>
          <div>{image && <a ref={dowlandRef} href={image} download="tweet.png"></a>}</div>
        </li>
      </ul>
    </div>
  );
}

export default Update;
