import "./Home.css";

function Home({ title, matter }) {
  return (
    <>
      <div class="card">
        {/* if you want to add js in HTML then always use {} */}
        <h1>{title}</h1>
        <p>{matter}</p>
      </div>
    </>
  );
}

export default Home;
