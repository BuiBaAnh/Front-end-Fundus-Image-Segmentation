import {Carousel} from 'react-bootstrap';
import fundus from '../../../../assets/fundus.png';
import './ThemeHeader.css';
const ThemeHeader = () => {
    return (
        <Carousel className = "carousel">
            <Carousel.Item interval={1000}>
                <img
                    className="image"
                    src={fundus}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h1>Hỗ trợ chuẩn đoán bằng AI</h1>
                <h2>Sử dụng mô hình AI để dự đoán các tổn thương trên ảnh võng mạc</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="image"
                src={fundus}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h1>Thử nghiệm mô hình AI</h1>
                <h2>Kiểm tra độ chính xác của mô hình AI trên dữ liệu có nhãn</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="image"
                src={fundus}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h1>Đóng góp Cơ sở dữ liệu</h1>
                <h2>Thêm ảnh và nhãn vào kho lưu trữ ảnh võng mạc</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ThemeHeader