declare type SingleApplicationDetailsProps = {
  userDetails: UserDetailsAPIResp;
  handleCloseUserDetailsModal: () => void;
  showUserDetails: boolean;
  getApplicationsList: () => Promise<void>;
};
