import { cn } from '@repo/utils';
import type { FC } from 'react';

interface StorybookLogoProps {
  color?: 'white' | 'system';
  height?: number;
}

export const StorybookLogo: FC<StorybookLogoProps> = ({
  color = 'system',
  height,
}) => (
  <svg
    fill="none"
    height={height || 20}
    viewBox="0 0 100 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={cn(
        'ui-fill-[#333333] dark:ui-fill-white',
        color === 'white' && 'ui-fill-white',
      )}
      clipRule="evenodd"
      d="M26.64 15.8314C25.7867 15.8314 24.9653 15.7168 24.176 15.4874C23.3867 15.2581 22.7307 14.9408 22.208 14.5354L23.008 12.7594C24.096 13.5168 25.3173 13.8954 26.672 13.8954C27.376 13.8954 27.9173 13.7808 28.296 13.5514C28.6747 13.3221 28.864 13.0048 28.864 12.5994C28.864 12.2368 28.6907 11.9541 28.344 11.7514C27.9973 11.5488 27.3813 11.3514 26.496 11.1594C25.504 10.9568 24.712 10.7114 24.12 10.4234C23.528 10.1354 23.096 9.78076 22.824 9.35943C22.552 8.93809 22.416 8.4181 22.416 7.79943C22.416 7.11676 22.6053 6.50876 22.984 5.97543C23.3627 5.44209 23.8933 5.02343 24.576 4.71943C25.2587 4.41543 26.048 4.26343 26.944 4.26343C27.744 4.26343 28.5147 4.38076 29.256 4.61543C29.9973 4.8501 30.5867 5.16476 31.024 5.55943L30.224 7.33543C29.1893 6.57809 28.1013 6.19943 26.96 6.19943C26.3093 6.19943 25.7973 6.32476 25.424 6.57543C25.0507 6.8261 24.864 7.17009 24.864 7.60743C24.864 7.86343 24.936 8.07409 25.08 8.23943C25.224 8.40476 25.464 8.55143 25.8 8.67943C26.136 8.80743 26.6133 8.94076 27.232 9.07943C28.6827 9.39943 29.7253 9.81009 30.36 10.3114C30.9947 10.8128 31.312 11.5061 31.312 12.3914C31.312 13.4581 30.9013 14.2981 30.08 14.9114C29.2587 15.5248 28.112 15.8314 26.64 15.8314ZM37.1042 14.0393C37.3495 14.0393 37.6055 14.0233 37.8722 13.9913L37.7442 15.7513C37.4348 15.794 37.1255 15.8153 36.8162 15.8153C35.6215 15.8153 34.7495 15.554 34.2002 15.0313C33.6508 14.5087 33.3762 13.714 33.3762 12.6473V9.63934H31.8882V7.83134H33.3762V5.52734H35.7922V7.83134H37.7602V9.63934H35.7922V12.6313C35.7922 13.57 36.2295 14.0393 37.1042 14.0393ZM42.72 15.8154C41.888 15.8154 41.1573 15.6474 40.528 15.3114C39.8987 14.9754 39.4133 14.5008 39.072 13.8874C38.7307 13.2741 38.56 12.5514 38.56 11.7194C38.56 10.8874 38.7307 10.1648 39.072 9.55143C39.4133 8.93809 39.8987 8.4661 40.528 8.13543C41.1573 7.80476 41.888 7.63943 42.72 7.63943C43.552 7.63943 44.2827 7.80476 44.912 8.13543C45.5413 8.4661 46.0267 8.93809 46.368 9.55143C46.7093 10.1648 46.88 10.8874 46.88 11.7194C46.88 12.5514 46.7093 13.2741 46.368 13.8874C46.0267 14.5008 45.5413 14.9754 44.912 15.3114C44.2827 15.6474 43.552 15.8154 42.72 15.8154ZM42.72 13.9754C43.8933 13.9754 44.48 13.2234 44.48 11.7194C44.48 10.9621 44.328 10.3968 44.024 10.0234C43.72 9.65009 43.2853 9.46343 42.72 9.46343C41.5467 9.46343 40.96 10.2154 40.96 11.7194C40.96 13.2234 41.5467 13.9754 42.72 13.9754ZM53.5681 9.62354L52.2081 9.76754C51.5361 9.83154 51.0615 10.0209 50.7841 10.3355C50.5068 10.6502 50.3681 11.0689 50.3681 11.5915V15.6875H47.9521V7.83154H50.2721V9.15954C50.6668 8.25286 51.4828 7.75687 52.7201 7.67154L53.4241 7.62354L53.5681 9.62354ZM60.588 7.84743H62.956L58.22 18.5674H55.772L57.276 15.2554L54.044 7.84743H56.556L58.54 12.8394L60.588 7.84743ZM68.5559 7.63947C69.2386 7.63947 69.8412 7.8048 70.3639 8.13547C70.8866 8.46614 71.2946 8.93813 71.5879 9.55147C71.8812 10.1648 72.0279 10.8768 72.0279 11.6875C72.0279 12.4981 71.8812 13.2155 71.5879 13.8395C71.2946 14.4635 70.8839 14.9488 70.3559 15.2955C69.8279 15.6421 69.2279 15.8155 68.5559 15.8155C68.0119 15.8155 67.5212 15.7008 67.0839 15.4715C66.6466 15.2421 66.3106 14.9248 66.0759 14.5195V15.6875H63.6919V4.40747H66.1079V8.88747C66.3426 8.4928 66.6759 8.18614 67.1079 7.96747C67.5399 7.7488 68.0226 7.63947 68.5559 7.63947ZM67.8522 13.9755C68.4175 13.9755 68.8548 13.7755 69.1642 13.3755C69.4735 12.9755 69.6282 12.4128 69.6282 11.6875C69.6282 10.9728 69.4735 10.4262 69.1642 10.0475C68.8548 9.66882 68.4175 9.47949 67.8522 9.47949C67.2868 9.47949 66.8495 9.67416 66.5402 10.0635C66.2308 10.4528 66.0762 11.0048 66.0762 11.7195C66.0762 12.4448 66.2308 13.0022 66.5402 13.3915C66.8495 13.7808 67.2868 13.9755 67.8522 13.9755ZM77.2762 15.8154C76.4442 15.8154 75.7135 15.6474 75.0842 15.3114C74.4549 14.9754 73.9695 14.5007 73.6282 13.8874C73.2869 13.2741 73.1162 12.5514 73.1162 11.7194C73.1162 10.8874 73.2869 10.1647 73.6282 9.5514C73.9695 8.93807 74.4549 8.46607 75.0842 8.1354C75.7135 7.80474 76.4442 7.6394 77.2762 7.6394C78.1082 7.6394 78.8389 7.80474 79.4682 8.1354C80.0975 8.46607 80.5829 8.93807 80.9242 9.5514C81.2655 10.1647 81.4362 10.8874 81.4362 11.7194C81.4362 12.5514 81.2655 13.2741 80.9242 13.8874C80.5829 14.5007 80.0975 14.9754 79.4682 15.3114C78.8389 15.6474 78.1082 15.8154 77.2762 15.8154ZM77.2761 13.9754C78.4495 13.9754 79.0361 13.2234 79.0361 11.7194C79.0361 10.962 78.8841 10.3967 78.5801 10.0234C78.2761 9.65004 77.8414 9.46338 77.2761 9.46338C76.1028 9.46338 75.5161 10.2154 75.5161 11.7194C75.5161 13.2234 76.1028 13.9754 77.2761 13.9754ZM86.284 15.8154C85.452 15.8154 84.7213 15.6474 84.092 15.3114C83.4627 14.9754 82.9773 14.5008 82.636 13.8874C82.2947 13.2741 82.124 12.5514 82.124 11.7194C82.124 10.8874 82.2947 10.1648 82.636 9.55143C82.9773 8.93809 83.4627 8.4661 84.092 8.13543C84.7213 7.80476 85.452 7.63943 86.284 7.63943C87.116 7.63943 87.8467 7.80476 88.476 8.13543C89.1053 8.4661 89.5907 8.93809 89.932 9.55143C90.2733 10.1648 90.444 10.8874 90.444 11.7194C90.444 12.5514 90.2733 13.2741 89.932 13.8874C89.5907 14.5008 89.1053 14.9754 88.476 15.3114C87.8467 15.6474 87.116 15.8154 86.284 15.8154ZM86.284 13.9754C87.4574 13.9754 88.044 13.2234 88.044 11.7194C88.044 10.9621 87.892 10.3968 87.588 10.0234C87.284 9.65009 86.8493 9.46343 86.284 9.46343C85.1107 9.46343 84.524 10.2154 84.524 11.7194C84.524 13.2234 85.1107 13.9754 86.284 13.9754ZM100 15.6875H97.0402L94.0322 12.1835V15.6875H91.6162V4.40747H94.0322V11.1915L96.9282 7.84747H99.8082L96.5122 11.5915L100 15.6875Z"
      fillRule="evenodd"
    />
    <path
      d="M0.620279 18.4293L0.000720095 1.92089C-0.0197415 1.37568 0.398305 0.913625 0.942836 0.879592L14.9844 0.00199235C15.5387 -0.0326493 16.0161 0.38859 16.0507 0.942857C16.052 0.96374 16.0527 0.984658 16.0527 1.00558V18.9945C16.0527 19.5498 15.6025 20 15.0471 20C15.0321 20 15.0171 19.9997 15.002 19.999L1.58 19.3962C1.05727 19.3727 0.639903 18.9522 0.620279 18.4293Z"
      fill="#FF4785"
    />
    <path
      clipRule="evenodd"
      d="M13.8804 0.0710449L11.9479 0.191825L11.8536 2.45837C11.8522 2.49321 11.8629 2.52747 11.884 2.55526C11.9341 2.62126 12.0282 2.63418 12.0942 2.58411L12.9746 1.91625L13.7182 2.50205C13.7461 2.524 13.7808 2.53536 13.8163 2.53413C13.8991 2.53124 13.9639 2.46178 13.961 2.37898L13.8804 0.0710449ZM12.3763 7.66099C12.0225 7.93579 9.38733 8.12329 9.38733 7.73208C9.44302 6.23927 8.77469 6.17383 8.40339 6.17383C8.05066 6.17383 7.45659 6.28046 7.45659 7.08017C7.45659 7.89512 8.32476 8.35519 9.34377 8.8952C10.7914 9.66232 12.5433 10.5908 12.5433 12.927C12.5433 15.1662 10.724 16.4031 8.40339 16.4031C6.00853 16.4031 3.91569 15.4342 4.15205 12.075C4.24488 11.6806 7.2895 11.7743 7.2895 12.075C7.25237 13.4612 7.56798 13.8689 8.36626 13.8689C8.9789 13.8689 9.25737 13.5312 9.25737 12.9625C9.25737 12.1019 8.35281 11.594 7.31222 11.0098C5.90324 10.2187 4.24488 9.28767 4.24488 7.15126C4.24488 5.01868 5.7115 3.59696 8.32913 3.59696C10.9468 3.59696 12.3763 4.9969 12.3763 7.66099Z"
      fill="white"
      fillRule="evenodd"
    />
  </svg>
);
