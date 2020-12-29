import React from 'react';
import Skeleton from "react-loading-skeleton";
import '../styles/_skeleton-item.scss';

export default function SkeletonItem() {
  return (
    <div className="skeleton-item">
      <Skeleton width={`100%`} height={150}/>
      <Skeleton width={`100%`} height={30}/>
    </div>
  );
}
