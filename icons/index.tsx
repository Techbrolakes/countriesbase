import React from 'react';

const greenLine = () => (
    <svg width="1121" height="474" viewBox="0 0 1121 474" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M3 446.311L33.9722 455.658C64.9444 465.004 126.889 483.697 188.833 457.934C250.778 432.171 312.722 361.952 374.667 297.32C436.611 232.689 498.556 173.647 560.5 174.38C622.444 175.113 684.389 235.622 746.333 217.321C808.278 199.019 870.222 101.906 932.167 53.051C994.111 4.19573 1056.06 3.59786 1087.03 3.29893L1118 3"
            stroke="#35977F"
            strokeWidth="5"
            strokeLinecap="round"
        />
    </svg>
);

const shadowLine = () => (
    <svg width="1143" height="496" viewBox="0 0 1143 496" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1035_4270)">
            <path
                d="M14 457.311L44.9722 466.658C75.9444 476.004 137.889 494.697 199.833 468.934C261.778 443.171 323.722 372.952 385.667 308.32C447.611 243.689 509.556 184.647 571.5 185.38C633.444 186.113 695.389 246.622 757.333 228.321C819.278 210.019 881.222 112.906 943.167 64.051C1005.11 15.1957 1067.06 14.5979 1098.03 14.2989L1129 14"
                stroke="#E2E8F0"
                strokeWidth="5"
                strokeLinecap="round"
            />
        </g>
        <defs>
            <filter
                id="filter0_f_1035_4270"
                x="0.499512"
                y="0.5"
                width="1142"
                height="494.999"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur_1035_4270" />
            </filter>
        </defs>
    </svg>
);

const icons = {
    greenLine,
    shadowLine,
};

export default icons;
