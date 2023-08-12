declare type AddRemarkProps = {
  isEditClick: boolean;
  userDetails: UserDetailsAPIResp;
  handleCloseEdit: () => void;
  getApplicationsList: () => Promise<void>;
};
