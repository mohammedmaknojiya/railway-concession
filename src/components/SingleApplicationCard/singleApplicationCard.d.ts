declare type SingleCardField = {
  label: string;
  value: string;
};

declare type SingleApplicationCardProps = {
  handleIsPreviewClick: (applicationDetails: UserDetailsAPIResp) => void;
  applicationDetails: UserDetailsAPIResp;
  handleIsEditClick: (applicationDetails: UserDetailsAPIResp) => void;
};
