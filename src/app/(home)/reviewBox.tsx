import React from "react";
import styles from "./home.module.scss";
interface ReviewBoxProps {
  name: string;
  review: string;
  stars: number;
}

const ReviewBox: React.FC<ReviewBoxProps> = ({ name, review, stars }) => {
  return (
    <div className={`${styles.review_box} flex flex-col items-center`}>
      <p className={`${styles.review_author}`}>{name}</p>
      <div className={`flex flex-row ${styles.review_star}`}>
        {Array(stars).fill(<p>⭐️</p>)}
      </div>
      <p className={` text-center ${styles.review_text}`}>{review}</p>
    </div>
  );
};

export default ReviewBox;
