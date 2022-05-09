import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node Blog Made By</span>
        <span className="headerTitleLg">Perassi</span>
      </div>
      <img
        className="headerImg"
        src="https://firebasestorage.googleapis.com/v0/b/shop-889c6.appspot.com/o/1652048187994pexels-jess-bailey-designs-768474.jpg?alt=media&token=2eeb1c78-6629-40ad-9654-c0a9b50b1aae"
        alt=""
      />
    </div>
  );
}
