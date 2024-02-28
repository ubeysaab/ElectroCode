import React from "react";

//  thrid party packages
import {
  faCartShopping,
  faCode,
  faMobileScreenButton,
  faHandshake,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// resimler ve listeler
import bkendImg from "../assets/backend-development-languages-ISHIR.png";
import frendImg from "../assets/images.avif";
import data from "../../data.js"
// components burada
import duyurular from "../../data.js";
import DuyuruCart from "../Components/DuyuruCart";
import ServiceCard from "../Components/ServiceCard";
import ServiceAnlatma from "../Components/serviceAnlatma.jsx";
import { Link } from "react-router-dom";
function home() {



  let cards = data.map(item =>{
    return <DuyuruCart {...item}/>
 })
  var settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    adaptiveHeight: true,
    speed: 400,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="home">
      <section className="home--hero">
        <div className="writer">
          <div className="typing">
            <span>uctan uca yazilim ekosistemi </span>
          </div>

          <div className="hero--textBox">
            <h3>Dunya gelecegi teknolojinin gelecegi</h3>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="services--text">
          <h2>Ne Yapmaktayiz ?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae temporibus necessitatibus, assumenda culpa optio ipsum a
            saepe consequuntur ullam totam praesentium repellat officiis
            voluptatum, magnam officia explicabo odit ut! Libero.
          </p>
        </div>
        <Slider {...settings} className="services--cards">
          <ServiceCard
            icon={faCartShopping}
            title={"E-TİCARET"}
            text={
              "Paket yazılımın sınırları içinde sıkışıp kalmayın! Burada size özel çözümler sunuyor ve süreçlerinizi entegre ediyoruz."
            }
          />
          <ServiceCard
            icon={faCode}
            title={"ÖZEL PROJE GELİŞTİRME"}
            text={
              "Paket yazılımın sınırları içinde sıkışıp kalmayın! Burada size özel çözümler sunuyor ve süreçlerinizi entegre ediyoruz."
            }
          />
          <ServiceCard
            icon={faMobileScreenButton}
            title={"MOBİL UYGULAMA"}
            text={
              "Paket yazılımın sınırları içinde sıkışıp kalmayın! Burada size özel çözümler sunuyor ve süreçlerinizi entegre ediyoruz."
            }
          />
          <ServiceCard
            icon={faHandshake}
            title={"PROJE SONRASI DESTEK"}
            text={
              "Paket yazılımın sınırları içinde sıkışıp kalmayın! Burada size özel çözümler sunuyor ve süreçlerinizi entegre ediyoruz."
            }
          />
        </Slider>
      </section>
   
      <ServiceAnlatma
        img={bkendImg}
        title={"Backend Yazılım Geliştirme"}
        text={`Electro Code Yazılım Ltd. olarak, kurum ve firmalara hızlı, güvenilir ve
          ölçeklenebilir sunucu tarafı kodları modern yazılım mimarileri ile
          sunuyoruz. Yazılımlarımız KVKK uyumlu olup veri güvenliğine önem
          vermektedir. Sunmakta olduğumuz yazılım çözümleri sunucu tarafı
          teknolojiler olan ASP.NET, .NET Core ve Node.js yazılım dilleridir.
          Daha fazla bilgi için bizimle iletişime geçebilirsiniz.`}
      />
      <ServiceAnlatma
        img={frendImg}
        title={"Arayüz Yazılım Geliştirme"}
        text={`Arayüz tasarlama ve backend yazılım geliştirmenin yanında, mobil ve web uygulamaları için kolay kullanılabilir ve anlaşılabilir arayüzlerin kodlanması sürecini de yönetmekteyiz. Arayüz kodlanmasında güncel web ve mobil teknolojileri kullanmaktayız.

Genel olarak arayüz geliştirmede kullandığımız teknolojiler React.js, React Native,olarak sayılabilir. (Örneğin, bu sitenin kodlanmasında React kullanıldı.)`}
      />

      <section className="duyurular">
        <div className="duyurular--title">
          <div className="duyurular--title--text">
            <h2>Blog</h2>
            <div>
              <span></span>
            </div>
            <p>We share our expertise. Read more on Electro Code Blog.</p>
          </div>

          <Link to={"/duyurular"}>
          <button>
            All Blog Posts
            <div>&gt;</div>
          </button>
          </Link>
        </div>
        <Slider {...settings} className="duyuru--cards">
         {cards}
        </Slider>
      </section>
    </main>
  );
}

export default home;
