import { useContext, useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { toast } from "react-toastify";

import { AppViewContext } from "context/AppView";
import SingleApplicationCard from "components/SingleApplicationCard";
import SingleApplicationDetails from "components/SingleApplicationDetails";
import { getUsersList } from "api/users";
import NotFoundPage from "components/NotFoundPage";
import Loader from "components/Loader";
import AddRemark from "components/AddRemark";

const ApplicationList = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [currentUserDetails, setCurrentUserDetails] =
    useState<UserDetailsAPIResp>({} as UserDetailsAPIResp);
  const [applicationsList, setApplicationsList] = useState<
    UserDetailsAPIResp[]
  >([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isEditClick, setIsEditClick] = useState(false);

  const { isPhoneView } = useContext(AppViewContext);

  const getApplicationsList = async () => {
    try {
      setIsFetching(true);
      const response = await getUsersList();
      if (response.status === 201) {
        setApplicationsList([...response?.data]);
      } else {
        toast.error("Unable to fetch users applications");
      }
    } catch (err) {
      toast.error("Unable to fetch users applications");
    } finally {
      setIsFetching(false);
    }
  };

  const handleCloseUserDetailsModal = () => {
    setShowUserDetails(false);
    setCurrentUserDetails({} as UserDetailsAPIResp);
  };

  const handleIsPreviewClick = (applicationDetails: UserDetailsAPIResp) => {
    setCurrentUserDetails({ ...applicationDetails });
    setShowUserDetails(true);
  };

  const handleCloseEdit = () => {
    setIsEditClick(false);
    setCurrentUserDetails({} as UserDetailsAPIResp);
  };

  const handleIsEditClick = (applicationDetails: UserDetailsAPIResp) => {
    setCurrentUserDetails({ ...applicationDetails });
    setIsEditClick(true);
  };

  useEffect(() => {
    getApplicationsList();
  }, []);

  if (applicationsList.length === 0) {
    return <NotFoundPage message={`Application list not found`} />;
  }

  return (
    <>
      <SingleApplicationDetails
        userDetails={currentUserDetails}
        showUserDetails={showUserDetails}
        handleCloseUserDetailsModal={handleCloseUserDetailsModal}
        getApplicationsList={getApplicationsList}
      />
      <AddRemark
        isEditClick={isEditClick}
        userDetails={currentUserDetails}
        handleCloseEdit={handleCloseEdit}
        getApplicationsList={getApplicationsList}
      />
      <div className="overflow-auto">
        <div className="h3 text-center my-4">Applications List</div>
        <div className={`${isPhoneView ? "mx-0 my-4" : "m-4"} p-4 border-top`}>
          <Loader isLoading={isFetching}>
            <Row>
              {applicationsList.map((application) => {
                return (
                  <SingleApplicationCard
                    handleIsPreviewClick={handleIsPreviewClick}
                    handleIsEditClick={handleIsEditClick}
                    applicationDetails={application}
                  />
                );
              })}
            </Row>
          </Loader>
        </div>
      </div>
    </>
  );
};

export default ApplicationList;
