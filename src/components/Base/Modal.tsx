import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

const StyledModal = styled(Modal)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  display: "flex",
  padding: "40px",
  "& .MuiBox-root": {
    margin: "auto auto",
  },
  "& .team-popup:focus-visible": {
    outline: "none",
  },
}));

interface ModalProps {
  openModal: boolean;
  handleModalClose: () => void;
}

export default function DetailModal(props: ModalProps) {
  const handleClose = () => props.handleModalClose();

  return (
    <div>
      <StyledModal
        open={props.openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="row team-popup">
          <div className="mfp-close-btn-in">
            <a title="Close" className="mfp-close" onClick={handleClose}>
              ×
            </a>
          </div>
          <div className="col-md-6">
            <div className="team-photo">
              <img src="images/team/a-color.jpg" alt="team" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="team-popup-info pl-md-3">
              <h3 className="team-name title title-lg pt-4">fffgd</h3>
              <p className="team-position mb-1">CEO</p>
              <ul className="team-social team-social-s2 mb-4">
                <li>
                  <a href="https://www.facebook.com">
                    <em className="fab fa-facebook-f"></em>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <em className="fab fa-linkedin-in"></em>
                  </a>
                </li>
              </ul>
              <p>
                He is a great man to work Lorem ipsum dolor sit amet, consec
                tetur adipis icing elit. Simi lique, autem.{" "}
              </p>
              <p>
                Tenetur quos facere magnam volupt ates quas esse Sedrep ell
                endus mole stiae tates quas esse Sed repell endus molesti aela
                uda ntium quis quam iusto minima thanks.
              </p>
              <div className="progress-list">
                <div className="progress-wrap">
                  <div className="progress-title">
                    Blockchain <span className="progress-amount">85%</span>
                  </div>
                  <div className="progress-bar progress-bar-xs bg-black-10">
                    <div
                      className="progress-percent bg-theme-grad-alternet"
                      data-percent="85"
                    ></div>
                  </div>
                </div>
                <div className="progress-wrap">
                  <div className="progress-title">
                    Decentralization{" "}
                    <span className="progress-amount">68%</span>
                  </div>
                  <div className="progress-bar progress-bar-xs bg-black-10">
                    <div
                      className="progress-percent bg-theme-grad-alternet"
                      data-percent="68"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </StyledModal>
    </div>
  );
}
