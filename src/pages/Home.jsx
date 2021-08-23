import React from "react";


import SideBar from "../components/SideBar";
import Content from "../components/Content";
import Friends from "../components/Friends";
import Story from "../components/Story";

import sideBarData from "../assets/data/side-bar";
import shortcutData from "../assets/data/shortcut";
import storyData from "../assets/data/story";
import {friendsData} from "../assets/data/friends";
import newFeedData from "../assets/data/new-feed";

function Home() {
	return (
		<div className="section">
			<div className="section__sidebar">
				<div className="section__sidebar__main">
					{sideBarData.map((item, index) => (
						<SideBar
							key={index}
							icon={item.icon}
							title={item.title}
						/>
					))}
				</div>
				<div className="section__sidebar__shortcut">
					{shortcutData.map((item, index) => (
						<SideBar
							key={index}
							icon={item.icon}
							title={item.title}
						/>
					))}
				</div>
			</div>
			<div className="section__content">
				<div className="section__content__story">
					{storyData.map((item, index) => (
						<Story
							key={index}
							story={item}
						/>
					))}
				</div>
				<div className="section__content__post">
					<div className="share">
						<div className="share__upSide">
							<img src="https://image.flaticon.com/icons/png/512/3003/3003035.png" alt="profile" />
							<input type="text" placeholder="Bạn đang nghĩ gì ?" />
						</div>
						<div className="share__downSide">
							<div className="share__downSide__link">
								<img src="https://image.flaticon.com/icons/png/512/811/811491.png" alt="" />
								<span>Video trực tiếp</span>
							</div>
							<div className="share__downSide__link">
								<img src="https://image.flaticon.com/icons/png/512/2659/2659360.png" alt="" />
								<span>Ảnh/Video</span>
							</div>
							<div className="share__downSide__link">
								<img src="https://image.flaticon.com/icons/png/512/187/187159.png" alt="" />
								<span>Cảm xúc hoat động</span>
							</div>
						</div>
					</div>
				</div>
				<div className="section__content__room">
					<div className="section__content__room__icon">
						<img src="https://image.flaticon.com/icons/png/512/4712/4712627.png" alt="" />
						<p>Tạo phòng họp mặt</p>
					</div>
					<div className="section__content__room__item">
						<img src="https://file.tinnhac.com/resize/600x-/music/2017/01/24/x513-001c.jpg" alt="" />
						<img src="https://yt3.ggpht.com/ytc/AKedOLQyAc-lV-wv9pFAyi-erdbkQXVBVUJfWVobw2qK=s900-c-k-c0x00ffffff-no-rj" alt="" />
						<img src="https://vtv1.mediacdn.vn/thumb_w/650/2021/1/5/81kjxaqcolsl1500-1609822490510309859755-crop-16098224965071778186586.jpg" alt="" />
						<img src="https://yt3.ggpht.com/ytc/AKedOLTU0rSaXY3yeBiJplsXouXOFsI3jzfqw2wvKHwH=s900-c-k-c0x00ffffff-no-rj" alt="" />
						<img src="https://lh3.googleusercontent.com/proxy/N25hPU-zofUIAYWR5j_AgdRn1ltuv0vOFnT_EX6ncg0bIx1ReqI4dgPmdvUE12zKR13v1wL6cEkE6YWmjUxgLpT2j5BVe8z53BKT6GPJUM7oe8iVPG_iHFiecHunx6OYw4YQOtMINVmPJEjr6cavfOI2UkpPbNzwsT-wqFNElFA76QxmFQ" alt="" />
						<img src="https://icdn.dantri.com.vn/thumb_w/640/2019/03/29/15-1553871967380.jpg" alt="" />
					</div>
				</div>
				<div className="section__content__newfeed">
					{newFeedData.map((item, index) => (
						<Content
							key={index}
							newfeed={item}
						/>
					))}
				</div>
			</div>
			<div className="section__friends">
				<div className="section__friends__notifications">
					<div className="section__friends__notifications__title">
						<h3>Thông báo</h3>
						<i className="bx bx-dots-horizontal-rounded"></i>
					</div>
					<ul>
						<li>
							<img src="https://image.flaticon.com/icons/png/512/837/837891.png" alt="gift-box" />
							<span>Hôm nay là Sinh Nhật của Thanos</span>
						</li>
					</ul>
				</div>
				
				<div className="section__friends__main">
					<div className="section__friends__main__title">
						<h3>Người liên hệ</h3>
						<div className="icons">
							<i className='bx bxs-video-plus'></i>
							<i className="bx bx-search"></i>
							<i className="bx bx-dots-horizontal-rounded"></i>
						</div>
					</div>
					<div className="section__friends__main__list">
						{
							friendsData.map((item, index) => (
								<Friends 
									key={index}
									avatar={item.avatar}
									name={item.name}
								/>
							))
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
