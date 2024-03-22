import { ApolloProvider, gql, useQuery } from "@apollo/client";
import { client } from "../lib/apolloClient";

const GET_DATA = gql`
  query {
    getAllNews {
      id
      title
      description
      author
      urlToImage
    }
  }
`;

export default function News() {
//   const { data } = useQuery(GET_DATA);
  return (
    <>
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: "1200px",
            marginBlock: "2rem",
            fontFamily: "sans-serif",
            gap: "2rem",
            margin: "100px auto",
          }}
        >
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "clamp(20rem, calc(20rem + 2vw), 22rem)",
              overflow: "hidden",
              boxShadow: "0 .1rem 1rem rgba(0, 0, 0, 0.1)",
              borderradius: "1em",
              borderRadius: "10px",
              background: "#ECE9E6",
              background: "linear-gradient(to right, #FFFFFF, #ECE9E6)",
            }}
          >
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="img card__image"
                width="600"
                style={{
                  maxWidth: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="card__body"
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: " .5rem",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", textTransform: "capitalize" }}>
                What's new in 2022 Tech
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div
              className="card__footer"
              style={{ display: "flex", padding: "1rem", marginTop: "auto" }}
            >
              <div style={{ display: "flex", gap: ".5rem" }} className="user">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info" style={{ color: "#666" }}>
                  <h5>Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>


          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "clamp(20rem, calc(20rem + 2vw), 22rem)",
              overflow: "hidden",
              boxShadow: "0 .1rem 1rem rgba(0, 0, 0, 0.1)",
              borderradius: "1em",
              borderRadius: "10px",
              background: "#ECE9E6",
              background: "linear-gradient(to right, #FFFFFF, #ECE9E6)",
            }}
          >
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="img card__image"
                width="600"
                style={{
                  maxWidth: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="card__body"
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: " .5rem",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", textTransform: "capitalize" }}>
                What's new in 2022 Tech
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div
              className="card__footer"
              style={{ display: "flex", padding: "1rem", marginTop: "auto" }}
            >
              <div style={{ display: "flex", gap: ".5rem" }} className="user">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info" style={{ color: "#666" }}>
                  <h5>Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>



          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "clamp(20rem, calc(20rem + 2vw), 22rem)",
              overflow: "hidden",
              boxShadow: "0 .1rem 1rem rgba(0, 0, 0, 0.1)",
              borderradius: "1em",
              borderRadius: "10px",
              background: "#ECE9E6",
              background: "linear-gradient(to right, #FFFFFF, #ECE9E6)",
            }}
          >
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="img card__image"
                width="600"
                style={{
                  maxWidth: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="card__body"
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: " .5rem",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", textTransform: "capitalize" }}>
                What's new in 2022 Tech
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div
              className="card__footer"
              style={{ display: "flex", padding: "1rem", marginTop: "auto" }}
            >
              <div style={{ display: "flex", gap: ".5rem" }} className="user">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info" style={{ color: "#666" }}>
                  <h5>Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>


          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "clamp(20rem, calc(20rem + 2vw), 22rem)",
              overflow: "hidden",
              boxShadow: "0 .1rem 1rem rgba(0, 0, 0, 0.1)",
              borderradius: "1em",
              borderRadius: "10px",
              background: "#ECE9E6",
              background: "linear-gradient(to right, #FFFFFF, #ECE9E6)",
            }}
          >
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="img card__image"
                width="600"
                style={{
                  maxWidth: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="card__body"
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: " .5rem",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", textTransform: "capitalize" }}>
                What's new in 2022 Tech
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div
              className="card__footer"
              style={{ display: "flex", padding: "1rem", marginTop: "auto" }}
            >
              <div style={{ display: "flex", gap: ".5rem" }} className="user">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info" style={{ color: "#666" }}>
                  <h5>Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "clamp(20rem, calc(20rem + 2vw), 22rem)",
              overflow: "hidden",
              boxShadow: "0 .1rem 1rem rgba(0, 0, 0, 0.1)",
              borderradius: "1em",
              borderRadius: "10px",
              background: "#ECE9E6",
              background: "linear-gradient(to right, #FFFFFF, #ECE9E6)",
            }}
          >
            <div className="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                className="img card__image"
                width="600"
                style={{
                  maxWidth: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="card__body"
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: " .5rem",
              }}
            >
              <h4 style={{ fontSize: "1.5rem", textTransform: "capitalize" }}>
                What's new in 2022 Tech
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                perferendis molestiae non nemo doloribus. Doloremque, nihil! At
                ea atque quidem!
              </p>
            </div>
            <div
              className="card__footer"
              style={{ display: "flex", padding: "1rem", marginTop: "auto" }}
            >
              <div style={{ display: "flex", gap: ".5rem" }} className="user">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  className="user__image"
                />
                <div className="user__info" style={{ color: "#666" }}>
                  <h5>Jane Doe</h5>
                  <small>2h ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
