import React from 'react';

const LinkedInIcon = ({ color=undefined, ...rest }) => ( 
  <svg width="26" height="27" viewBox="0 0 26 27" {...rest}>
    <g fill="none" fillRule="evenodd">
      <g fill={color || "#2C4349"}>
        <g>
          <path d="M19.247 18.804h-2.503v-3.918c0-.936-.018-2.137-1.302-2.137-1.304 0-1.503 1.018-1.503 2.07v3.985h-2.504v-8.059h2.404v1.102h.032c.335-.634 1.152-1.302 2.372-1.302 2.536 0 3.004 1.67 3.004 3.84v4.42zM8.61 9.645c-.803 0-1.454-.652-1.454-1.453 0-.8.651-1.452 1.454-1.452.803 0 1.453.651 1.453 1.452 0 .801-.65 1.453-1.453 1.453zm-1.255 9.16h2.51v-8.06h-2.51v8.06zM12.641.97C5.814.971.281 6.505.281 13.331c0 6.827 5.533 12.361 12.36 12.361 6.827 0 12.361-5.534 12.361-12.36 0-6.827-5.534-12.36-12.36-12.36z" transform="translate(-1090 -457) translate(993 457) translate(97.72 .029)"/>
        </g>
      </g>
    </g>
  </svg>
);

export default LinkedInIcon;