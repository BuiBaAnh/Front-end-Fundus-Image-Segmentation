import {Carousel} from 'react-bootstrap';
import fundus from '../../../../assets/fundus.png';
import AI from '../../../../assets/AI.jpg';
import Database from '../../../../assets/Database.png';

import './ThemeHeader.css';
const ThemeHeader = () => {
    return (
        <Carousel className = "carousel">
            <Carousel.Item interval={1500}>
                <img
                    className="image1"
                    src={AI}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h1 className = 'title1'><b>Hỗ trợ chuẩn đoán bằng AI</b></h1>
                <h2 className = 'description1'>Sử dụng mô hình AI để dự đoán các tổn thương trên ảnh võng mạc</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="image2"
                    src={fundus}
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h1 className = 'title2'><b>Thử nghiệm mô hình AI</b></h1>
                <h2 className = 'description2'>Kiểm tra độ chính xác của mô hình AI trên dữ liệu có nhãn</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="image3"
                src={Database}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h1 className = 'title3'><b>Đóng góp Cơ sở dữ liệu</b></h1>
                <h2 className = 'description3'>Thêm ảnh và nhãn vào kho lưu trữ ảnh võng mạc</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ThemeHeader