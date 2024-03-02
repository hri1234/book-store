import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Footer from "../components/Footer"

const Home = () => {


  return (
    <>
  <div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      <div>
        <img
          src="https://www.bookswagon.com/images/promotionimages/web/2_CuratedWeb1701.jpg"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  </div>
  <div className="row  my-1 ">
    <div className="col-md-12">
      <div>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="https://www.bookswagon.com/bannerimages/80_inr.jpg?v=4.3"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=2.5"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=5.0"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=3.8"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.0"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=5.0"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="row my-5">
    <div className="col-md-12">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className=" d-flex justify-content-between  flex-wrap text-center">
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon4.png"
                  alt=""
                />
                <h6>Award Winners</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon7.png"
                  alt=""
                />
                <h6> Box sets</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon2.png"
                  alt=""
                />
                <h6> Best Seller</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon5.png"
                  alt=""
                />
                <h6>New Arrivals</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/tarot.png"
                  alt=""
                />
                <h6>Fictions Books</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/TodaysDeal.png"
                  alt=""
                />
                <h6>Tarot Cards</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/TodaysDeal.png"
                  alt=""
                />
                <h6>Today's Deal</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon8.png"
                  alt=""
                />
                <h6>Today's Deal</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" d-flex justify-content-between  flex-wrap text-center">
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon4.png"
                  alt=""
                />
                <h6>Award Winners</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon7.png"
                  alt=""
                />
                <h6> Box sets</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon2.png"
                  alt=""
                />
                <h6> Best Seller</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon5.png"
                  alt=""
                />
                <h6>New Arrivals</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/tarot.png"
                  alt=""
                />
                <h6>Fictions Books</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/TodaysDeal.png"
                  alt=""
                />
                <h6>Tarot Cards</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/TodaysDeal.png"
                  alt=""
                />
                <h6>Today's Deal</h6>
              </div>
              <div className=" ">
                <img
                  src="https://www.bookswagon.com/Images/staticimages/icon8.png"
                  alt=""
                />
                <h6>Today's Deal</h6>
              </div>
            </div>
          </div>
          <div className=" ">
            <button
              className="carousel-control-prev   "
              type="button"
              data-bs-target="#carouselExampleAutoplaying "
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon   "
              aria-hidden="true"
            />
            <span className="visually-hidden ">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="row my-3">
    <Link to="/shop">
    <div className="col-md-12">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" d-flex justify-content-between  flex-wrap text-center">
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/544/9781421520544.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/463/9781421522463.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/468/9781685798468.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/748/9781974738748.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/581/9781974740581.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/939/9781974738939.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" d-flex justify-content-between  flex-wrap text-center">
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/618/9781421599618.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/939/9781974738939.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/291/9781524871291.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/149/9781974720149.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/527/9781638585527.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/470/9781421522470.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </Link>
  </div>



  
  <div className="container my-3">
    <div className="row">
      <div className="col-md-12">
        <div className="">
          <img
            src="https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=4.1"
            alt=""
            className="img-fluid  w-100 "
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="row my-3">
    <Link to="/shop">
    <div className="col-md-12">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className=" d-flex justify-content-between  flex-wrap text-center">
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/544/9781421520544.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/463/9781421522463.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/468/9781685798468.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/748/9781974738748.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/581/9781974740581.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/939/9781974738939.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className=" d-flex justify-content-between  flex-wrap text-center">
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/618/9781421599618.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/939/9781974738939.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/291/9781524871291.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/149/9781974720149.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/527/9781638585527.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
              <div className=" ">
                <div className="border  border-2  border-danger  p-2">
                  <img
                    src="https://www.bookswagon.com/productimages/images200/470/9781421522470.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-3">
                  <p className="p-0 m-0 " style={{ fontSize: 12 }}>
                    Vagabond (Vizbig Edition), Vol. 1
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 16 }}>
                    author authortextcolor
                  </p>
                  <div>
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                    <i
                      className="fa-solid fa-star"
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      "4.9" <span> (7) </span>
                    </b>
                  </p>
                  <p className="p-0 m-0" style={{ fontSize: 14 }}>
                    {" "}
                    <b>
                      {" "}
                      ₹1,097{" "}
                      <span>
                        {" "}
                        <del> ₹1,389</del>{" "}
                      </span>{" "}
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </Link>
  </div>

        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]">
              {/* {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))} */}
            </div>
          </div>
        </>
    <Footer />
    </>
  );
};

export default Home;
