import './layoutStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "./assets/images/logo.webp";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


import slide1 from "./assets/images/slider_1.webp";
import slide2 from "./assets/images/slider_2.webp";
import slide3 from "./assets/images/silder_3.webp";
import product from "./assets/images/silder_4.webp";
function App() {
  return (
    <>
      <header className='bg-white'> 
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'>
              <img src={logo} alt="logo" style={{width:'200px', marginTop:'6px'}}  />
            </div>
            <div className='col-md-9'>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Trang chủ</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Converse All
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Converse All Style 1</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Converse All Style 2</a></li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Classic
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Chuck Taylor</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Giày</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Túi xách</a></li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Accessories - Phụ trang
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Thắt lưng</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Mắt kính</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Trang sức</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Mũ nón</a></li>
                          <li><hr class="dropdown-divider"/></li>
                          <li><a class="dropdown-item" href="#">Khăn choàng</a></li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Tin tức</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Liên hệ</a>
                      </li>
                    </ul>
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                      <button class="btn btn-outline-success" type="submit" ><CiSearch /></button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            <div className='col-md-1'>
              <div className="row">
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiUser /></div>
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiHeart /></div>
                <div class="col-4 text-center" style={{fontSize:'25px'}}><CiShoppingCart /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="hdl-slideshow">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={slide1} class="d-block w-100" alt="slide1" />
                <div class='slide-text1'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Sale tất cả sản phẩm</strong></h1>
                  <p>Giảm 10% cho tất cả sản phẩm</p>
                  <button>Mua ngay</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slide2} class="d-block w-100" alt="slide2" />
                <div class='slide-text2 tex-center'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Mùa hè năng động</strong></h1>
                  <p>Nhập ngay mã F1CHAOHE</p>
                  <button>Mua ngay</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src={slide3} class="d-block w-100" alt="slide3" />
                <div class='slide-text text-end'>
                  <h1><strong>CONVERSE</strong></h1>
                  <h1><strong>Bộ sưu tập mới</strong></h1>
                  <p>Chuck 70 luôn tươi</p>
                  <button>Xem ngay</button>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        <section class="hdl-maincontent">
          <div class="container">
            <div class='product_category'>
              <div class="row">
              <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product} class="img-fluid" alt=""
                          id="img1" />                       
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Chuck Taylor All Star Classic 1</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>1.200.000đ</del></div>
                      <div class="flex-fill text-end text-main">1.000.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product}  class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Chuck Taylor All Star Classic 2</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>1.200.000đ</del></div>
                      <div class="flex-fill text-end text-main">1.000.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product}  class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Chuck Taylor All Star Classic 3</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>1.200.000đ</del></div>
                      <div class="flex-fill text-end text-main">1.000.000đ</div>
                    </h3>
                  </div>
                </div>
                <div class="col-6 col-md-3 mb-4">
                  <div class="product-item border">
                    <div class="product-item-image">
                      <a href="product_detail.html">
                        <img src={product} class="img-fluid" alt=""
                          id="img1" />
                      </a>
                    </div>
                    <h2 class="product-item-name text-main text-center fs-5 py-1">
                      <a href="product_detail.html">Chuck Taylor All Star Classic 4</a>
                    </h2>
                    <h3 class="product-item-price fs-6 p-2 d-flex">
                      <div class="flex-fill"><del>1.200.000đ</del></div>
                      <div class="flex-fill text-end text-main">1.000.000đ</div>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-dark text-white'>
        <div class="container">
          <div class="row">
            <div class="col-md-4 pt-4">
					    <a href="/" title="F1GENZ Shoes" aria-label="F1GENZ Shoes">
						    <img title="F1GENZ Shoes" src={logo} alt="F1GENZ Shoes" style={{width:'200px'}}/>
					    </a>
					    <p>F1GENZ SHOES luôn cam kết, đảm bảo đưa sản phẩm trực tiếp từ nhà sản xuất đến tay người
                  dùng và kiểm soát được chất lượng để đáp ứng được nhu cầu ngày càng cao của khách hàng.
                  Tất cả các sản phẩm tại F1GENZ SHOES đều có nguồn gốc xuất xứ rõ ràng, chất lượng.</p>
              <h4>
                Liên hệ:
                <i class="fa fa-chevron-down"></i>
              </h4>
              <div class="footer-content">
                <p> Tư vấn dịch vụ:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Hỗ trợ sử dụng:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Hỗ trợ vận chuyển:
                    <a aria-label="liên hệ" title="liên hệ" href="tel:18006750"> 1800 6750</a><br></br>
                    Email:
                    <a aria-label="liên hệ" title="liên hệ" href="mailto:support@sapo.vn"> support@sapo.vn</a><br></br>
                  </p>
                </div>
				    </div>
            <div class="col-md-4 pt-4">
					    <h4>Về chúng tôi <i class="fa fa-chevron-down"></i></h4>
					    <div class="footer-content">
						    <ul>
							    <li><a href="/gioi-thieu">Giới thiệu</a></li>
							    <li><a href="/chinh-sach-doi-tra">Chính sách đổi trả</a></li>
							    <li><a href="/chinh-sach-bao-mat">Chính sách bảo mật</a></li>
							    <li><a href="/dieu-khoan-dich-vu">Điều khoản dịch vụ</a></li>
						    </ul>
					    </div>
              <h4>Danh mục nổi bật <i class="fa fa-chevron-down"></i></h4>
					    <div class="footer-content">
						    <ul>
							    <li><a href="/chuck-2" aria-label="Chuck 2" title="Chuck 2">Chuck 2</a></li>
							    <li><a href="/converse-all" aria-label="Converse All" title="Converse All">Converse All</a></li>
							    <li><a href="/socks" aria-label="Socks" title="Socks">Socks</a></li>
							    <li><a href="/jack-purcell" aria-label="Jack Purcell" title="Jack Purcell">Jack Purcell</a></li>
							    <li><a href="/converse-seasonal" aria-label="Converse Seasonal" title="Converse Seasonal">Converse Seasonal</a></li>
						    </ul>
					    </div>
				    </div>
            <div class="col-md-4 pt-4">
					    <h4>Liên hệ với chúng tôi <i class="fa fa-chevron-down"></i></h4>
						  <p>Luôn cập nhật tất cả các hành động mà chúng tôi đã lưu cho tất cả khách hàng của mình.</p>
              <div class="row">
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px'}}>
                  <FaFacebookSquare />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'black'}}>
                  <FaTiktok />

                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color: 'red'}}>
                  <FaYoutube />
                  </a>
                </div>
                <div class="col-3 text center">
                  <a href="/collections/all" style={{fontSize:'30px', color:'pink'}}>
                  <FaInstagramSquare />

                  </a>
                </div>
                <div>
                  <h3 class="fs-5">
                    <strong>Lượt truy cập</strong>
                  </h3>
                  <p class="my-1">9888 lượt</p>
                </div>
	            </div>
				    </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
