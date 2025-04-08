import pic1 from "../assets/pic1.png";

export default function AboutMe() {
  return (
    <div className="container-fluid centreo">
        <h2>About Me</h2>
        <img id="profilepic" className="img-fluid" src={pic1} alt={"profile picture"} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur maiores, dolor iusto dolorum ullam, natus deleniti blanditiis
          impedit suscipit sed magnam alias in, repellat expedita hic explicabo
          architecto soluta. About us Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Velit voluptate exercitationem quaerat pariatur
          mollitia, excepturi, voluptatem eveniet a dolor nobis ex veniam totam
          nostrum temporibus ad omnis nam rerum eligendi.
        </p>
    </div>
  );
}
