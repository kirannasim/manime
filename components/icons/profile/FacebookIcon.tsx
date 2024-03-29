import React from 'react';

const FbIcon = ({ color=undefined, ...rest }) => (
  <svg width="25" height="26" viewBox="0 0 25 26" {...rest}>
    <g fill="none" fillRule="evenodd">
      <g fill={color || "#2C4349"}>
        <g>
          <path d="M15.485 7.767h-.186c-.45.001-.899-.011-1.349.004-.616.022-1.073.257-1.095 1.027-.016.562-.021 1.857-.021 1.857s1.447.002 2.078 0h.498c-.116.895-.227 1.756-.341 2.624h-2.217v6.556h-2.719v-6.567H7.908v-2.612h2.238v-.196c-.001-.526-.011-1.05.002-1.575.008-.334.023-.675.081-1.004.139-.797.506-1.471 1.174-1.952.583-.417 1.25-.589 1.955-.604.461-.011.923.012 1.384.033.251.012.503.047.743.071v2.338zM12.36 0C5.533 0 0 5.535 0 12.361c0 6.827 5.533 12.361 12.36 12.361 6.827 0 12.361-5.534 12.361-12.361C24.721 5.535 19.187 0 12.36 0z" transform="translate(-993 -458) translate(993 457) translate(0 1.032)"/>
        </g>
      </g>
    </g>
  </svg>
);

export default FbIcon;