import React, {useState} from "react";

import logo from "../assets/images/facebook.png";
import user from "../assets/images/profile.png";

import {friendsData} from "../assets/data/friends";

const listFriends = (friendsData) => {
	let friends = null
	friends = friendsData.map((item) => {
		return (
			<div className="box__message__friend__list"  key={item.name}>
				<img src={item.avatar} alt="" />
				<p className="box__message__friend__name__list">
					{item.name}
				</p>
				<div className="box__message__friend__list__active">

				</div>
			</div>
			
		)
	})
	return friends;
}

function Header() {

	const [boxMessage, setBoxMessage] = useState(false)
	const [boxUser, setBoxUser] = useState(false)

	const showBoxMessge = () => {
		console.log(boxMessage);
		return setBoxMessage(!boxMessage)
	}

	const showBoxUser = () => {
		return setBoxUser(!boxUser)
	}

	return (
		<div className="header">
			<div className="header__left">
				<img className="header__left__logo" src={logo} alt="logo" />
				<div className="header__left__input__icons">
					<i className="bx bx-search icon" />
					<input
						className="input-field"
						type="text"
						placeholder="Tìm kiếm trên Facebook"
					/>
				</div>
			</div>
			<div className="header__center">
				<p className="header__center__active__icon">
					<i className="bx bxs-home" />
					<span>Trang chủ</span>
				</p>
				<p>
					<i className="bx bx-group" />
					<span>Bạn bè</span>
				</p>
				<p>
					<i className="bx bx-slideshow" />
					<span>Watch</span>
				</p>
				<p>
					<i className="bx bx-store-alt" />
					<span>Marketplace</span>
				</p>
				<p>
					<i className="bx bxl-github" />
					<span>Trò chơi</span>
				</p>
				<p>
					<i className="bx bx-menu"></i>
					<span>Menu</span>
				</p>
			</div>
			<div className="header__right">
				<div className="header__right__user">
					<img src={user} alt="profile" />
					<span>Trang</span>
				</div>
				<div className="header__right__links">
					<i className="bx bxs-widget" />
					<i className="bx bxl-messenger" onClick={showBoxMessge}/>
					<i className="bx bxs-bell" />
					<i className="bx bx-caret-down" onClick={showBoxUser}/>
				</div>
				<div className={boxMessage ? "box__message" : "hidden-box__message"}>
					<div className="box__message__name">
						<h3>Messenger</h3>
						<div className="icons">
							<i className="bx bx-dots-horizontal-rounded"></i>
							<i className="bx bxs-video-plus"></i>
							<i className='bx bx-mouse-alt' ></i>
							<i className='bx bx-edit-alt'></i>
						</div>
					</div>
					<div className="box__message__search">
						<input
							type="text"
							placeholder="Tìm kiếm trên Messager"
						/>
					</div>
					<div className="box__message__friend">
						{
							listFriends(friendsData)
						}
					</div>
				</div>
				<div className={boxUser ? "box__user" : "hidden-box__user"}>
					<div className="box__user__info">
						<img src={user} alt="" />
						<div className="box__user__info__name">
							<p>Bùi Nghiêm Trang</p>
							<span>Xem trang cá nhân của bạn</span>
						</div>
					</div>
					<div className="box__user__setting">
						<div className="box__user__setting__icon">
							<ul>
								<li><i className='bx bxs-comment-add'></i></li>
								<li><i className='bx bx-cog'></i></li>
								<li><i className='bx bx-support'></i></li>
								<li><i className='bx bxs-moon'></i></li>
								<li><i className='bx bx-exit'></i></li>
							</ul>	
						</div>
						<div className="box__user__setting__name">
							<ul>
								<li><p>Đóng góp ý kiến</p></li>
								<li><p>Cài đặt và quyền riêng tư</p></li>
								<li><p>Trợ giúp và hỗ trợ</p></li>
								<li><p>Màn hình và trợ năng</p></li>
								<li><p>Đăng xuất</p></li>
							</ul>																											
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
