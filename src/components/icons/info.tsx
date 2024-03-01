import React from "react";

export interface InfoProps extends React.SVGProps<SVGSVGElement> {}

const Info = React.memo(({ ...props }: InfoProps) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 2.6501C6.83623 2.6501 2.6501 6.83623 2.6501 12.0001C2.6501 17.164 6.83623 21.3501 12.0001 21.3501C17.164 21.3501 21.3501 17.164 21.3501 12.0001C21.3501 6.83623 17.164 2.6501 12.0001 2.6501ZM1.3501 12.0001C1.3501 6.11826 6.11826 1.3501 12.0001 1.3501C17.8819 1.3501 22.6501 6.11826 22.6501 12.0001C22.6501 17.8819 17.8819 22.6501 12.0001 22.6501C6.11826 22.6501 1.3501 17.8819 1.3501 12.0001Z"
        fill="#B0B8C1"
      />
      <path
        d="M10.5 9.75C10.5 9.11974 11.0783 8.5 11.9318 8.5C12.7854 8.5 13.3636 9.11974 13.3636 9.75C13.3636 10.1664 13.1248 10.5628 12.7095 10.7989C12.3765 10.9882 12.0108 11.2479 11.7205 11.5866C11.4268 11.9293 11.1818 12.3888 11.1817 12.9498L11.1816 13.4999C11.1816 13.9141 11.5174 14.25 11.9316 14.25C12.3458 14.25 12.6816 13.9143 12.6816 13.5001L12.6817 12.95C12.6817 12.8483 12.7229 12.722 12.8594 12.5628C12.9993 12.3995 13.2078 12.2411 13.4509 12.1029C14.2763 11.6336 14.8636 10.7703 14.8636 9.75C14.8636 8.17112 13.4883 7 11.9318 7C10.3754 7 9 8.17112 9 9.75C9 10.1642 9.33579 10.5 9.75 10.5C10.1642 10.5 10.5 10.1642 10.5 9.75Z"
        fill="#B0B8C1"
      />
      <path
        d="M11.9316 17C12.4839 17 12.9316 16.5523 12.9316 16C12.9316 15.4477 12.4839 15 11.9316 15C11.3794 15 10.9316 15.4477 10.9316 16C10.9316 16.5523 11.3794 17 11.9316 17Z"
        fill="#B0B8C1"
      />
    </svg>
  );
});

export default Info;
