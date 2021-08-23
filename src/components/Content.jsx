import React from "react";

function Content({newfeed}) {
	return (
		<div className="content">
			<div className="content__name">
				<img src={newfeed.avatar} alt="" />
				<div className="content__name__txt">
					<p>{newfeed.name}</p>
					<span>
						{newfeed.time}
						<i className='bx bx-world'></i>
					</span>
				</div>
			</div>
			<div className="content__main">
				<p className="content__main__title">
					{newfeed.title}
				</p>
				<img src={newfeed.image} alt="" />
			</div>
			<div className="content__interact">
				<div className="content__interact__emojis">
					<img src="https://cdn.iconscout.com/icon/free/png-64/like-2387659-1991059.png" alt="" />
					<img src="https://cdn.iconscout.com/icon/free/png-64/love-2387666-1991064.png" alt="" />
					<img src="https://cdn.iconscout.com/icon/free/png-64/haha-2387660-1991060.png" alt="" />
					<span>{newfeed.like}</span>
				</div>
				<div className="content__interact__comments">
					<span>{newfeed.comments} bình luận</span>
					<span>{newfeed.share} chia sẻ</span>
				</div>
			</div>
			<div className="content__button">
				<div className="content__button__click">
					<i className='bx bx-like'></i>
					<span>Thích</span>
				</div>
				<div className="content__button__click">
					<i className='bx bx-comment'></i>
					<span>Bình luận</span>
				</div>
				<div className="content__button__click">
					<i className='bx bx-share-alt'></i>
					<span>Chia sẻ</span>
				</div>
			</div>
		</div>
	);
}

export default Content;
