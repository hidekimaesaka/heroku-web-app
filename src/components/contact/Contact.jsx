import "./contact.scss";

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/assets/shake.svg"></img>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="https://api.staticforms.xyz/submit" method="post">
        <input type="hidden" name="accessKey" value="8463691e-a088-4024-89ef-acfd745509f0"></input>
        <input type="hidden" name="redirectTo" value="https://hidekimsk.com/#home"></input>
        <input name="name" type="text" placeholder="Name"></input>
          <input name="email" type="email" placeholder="Email"></input>
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
