import React from 'react';

import styles from '@styles/gift/group/confirmation.module.css'

export default function ConfirmBanner() {
  return (
    <div className={styles.confirmBannerContainer} style={{marginTop: '50px'}}>
      <div className={styles.orderConfirmTitle} style={{marginTop: '10px'}}>
        Subscription Order Confirmed!
      </div>
      {/* <img
        className={styles.confirmBannerBow}
        src='/static/icons/bow.svg'
        alt='bow' /> */}
      <img
        className={styles.groupGiftImage}
        src='https://cdn.shopifycdn.net/s/files/1/0253/6561/0605/files/group-gift-banner_70e30a30-d095-4627-996a-a372c51bb728.png?v=1618068596'
        alt='group-gift' />
      
    </div>
  )
}