import {Card} from 'react-bootstrap';
import './CardOption.css';
const variant = 'info'

const CardOption = (props) => {
    return (
      <div className = 'container'>
        {/* <img src = ></img>   */}
          <a className="card1" href="#">
            <h3>Hỗ trợ chuẩn đoán bằng AI</h3>
            <p className="small">Sử dụng mô hình AI để dự đoán các tổn thương trên ảnh võng mạc</p>
            <div className="go-corner" href="#">
              <div className="go-arrow">
                →
              </div>
            </div>
          </a>
        {/* <img src = ></img>   */}
          <a className="card1" href="#">
            <h3>Thử nghiệm mô hình AI</h3>
            <p className="small">Kiểm tra độ chính xác của mô hình AI trên dữ liệu có nhãn</p>
            <div className="go-corner" href="#">
              <div className="go-arrow">
                →
              </div>
            </div>
          </a>

        {/* <img src = ></img>   */}
          <a className="card1" href="#">
            <h3>Đóng góp Cơ sở dữ liệu</h3>
            <p className="small">Thêm ảnh và nhãn vào kho lưu trữ ảnh võng mạc</p>
            <div className="go-corner" href="#">
              <div className="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>
    );
}
export default CardOption