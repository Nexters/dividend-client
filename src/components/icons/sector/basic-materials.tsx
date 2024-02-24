import React from "react";

export interface BasicMaterialsIconProps extends React.SVGProps<SVGSVGElement> {}

const BasicMaterialsIcon = React.memo(({ ...props }: BasicMaterialsIconProps) => {
  return (
    <svg {...props} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.792969 8.28467C0.792969 8.00853 1.01683 7.78467 1.29297 7.78467H22.8326C23.1087 7.78467 23.3326 8.00853 23.3326 8.28467V10.5142H0.792969V8.28467Z"
        fill="currentColor"
      />
      <path
        d="M12.0627 5.24752L10.7871 6.5638L18.5004 6.56389L15.0028 2.95477C14.8064 2.75206 14.4812 2.75206 14.2847 2.95477L12.0627 5.24752Z"
        fill="currentColor"
      />
      <path
        d="M9.84075 2.95477L11.2272 4.38536L9.1161 6.5638H5.62512L9.12264 2.95477C9.31909 2.75206 9.6443 2.75206 9.84075 2.95477Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.3249 11.7446H1.80029V17.5523C1.80029 18.1046 2.24801 18.5523 2.80029 18.5523H4.18707C4.22539 19.8957 5.32644 20.973 6.6791 20.973C8.03177 20.973 9.13282 19.8957 9.17114 18.5523H14.9537C14.992 19.8957 16.093 20.973 17.4457 20.973C18.7984 20.973 19.8994 19.8957 19.9377 18.5523H21.3249C21.8772 18.5523 22.3249 18.1046 22.3249 17.5523V11.7446ZM8.42217 18.4799C8.42217 19.4426 7.64178 20.223 6.6791 20.223C5.71643 20.223 4.93604 19.4426 4.93604 18.4799C4.93604 17.5172 5.71643 16.7368 6.6791 16.7368C7.64178 16.7368 8.42217 17.5172 8.42217 18.4799ZM17.4457 20.223C18.4084 20.223 19.1888 19.4426 19.1888 18.4799C19.1888 17.5172 18.4084 16.7368 17.4457 16.7368C16.483 16.7368 15.7026 17.5172 15.7026 18.4799C15.7026 19.4426 16.483 20.223 17.4457 20.223Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.6791 15.9868C5.30222 15.9868 4.18604 17.103 4.18604 18.4799C4.18604 19.8568 5.30222 20.973 6.6791 20.973C8.05599 20.973 9.17217 19.8568 9.17217 18.4799C9.17217 17.103 8.05599 15.9868 6.6791 15.9868ZM5.68604 18.4799C5.68604 17.9314 6.13065 17.4868 6.6791 17.4868C7.22756 17.4868 7.67217 17.9314 7.67217 18.4799C7.67217 19.0283 7.22756 19.473 6.6791 19.473C6.13065 19.473 5.68604 19.0283 5.68604 18.4799Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.4457 15.9868C16.0688 15.9868 14.9526 17.103 14.9526 18.4799C14.9526 19.8568 16.0688 20.973 17.4457 20.973C18.8226 20.973 19.9388 19.8568 19.9388 18.4799C19.9388 17.103 18.8226 15.9868 17.4457 15.9868ZM16.4526 18.4799C16.4526 17.9314 16.8972 17.4868 17.4457 17.4868C17.9942 17.4868 18.4388 17.9314 18.4388 18.4799C18.4388 19.0283 17.9942 19.473 17.4457 19.473C16.8972 19.473 16.4526 19.0283 16.4526 18.4799Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default BasicMaterialsIcon;