import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Tabs,
  Tab,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: "2px solid #dbe4f733",
  textAlign: "center",
  justifyContent: "center",
  marginBottom: "30px",
  overflow: "unset!important",
  "& .MuiTabs-flexContainer": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    [theme.breakpoints.down(500)]: {
      display: "flex",
      flexFlow: "wrap",
    },
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-scroller": {
    overflow: "unset!important",
    overflowX: "unset!important",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: "#eff6ff",
  padding: "12px 12px",
  lineHight: "19px",
  fontSize: "16px",
  fontFamily: "Poppins, sans-serif",
  textTransform: "none",
  overflow: "unset",
  "&.Mui-selected": {
    color: "#46bdf4",
    lineHight: "19px",
    fontSize: "16px",
  },
  "&.Mui-selected:after": {
    background: "#46bdf4",
    opacity: 1,
    position: "absolute",
    width: "100%",
    height: "2px",
    left: 0,
    bottom: "-2px",
    content: "' '",
  },
}));

const StyledTabPanel = styled(TabPanel)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  "& .MuiBox-root": {
    padding: "0px",
  },
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderTopLeftRadius: "0px!important",
  borderTopRightRadius: "0px!important",
  borderBottomLeftRadius: "0px!important",
  borderBottomRightRadius: "0px!important",
  background: "#10122d",
  margin: "0px!important",
  "&.MuiAccordion-root:not(:last-child)": {
    borderBottom: "1px solid #d9e3f71a",
  },
  "&.Mui-expanded": {
    background: "#171a40",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  color: "#fff",
  textAlign: "left",
  fontSize: "1.2rem",
  fontWeight: 400,
  "&:hover": {
    color: "#46bdf4",
  },
  "& .Mui-expanded": {
    color: "#46bdf4",
  },
  "& .MuiAccordionSummary-content": {
    margin: "10px 0px 8px 20px",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#46bdf4",
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  color: "#a2b4d2",
  textAlign: "left",
  fontSize: "15px",
  fontWeight: 300,
  margin: "0px 35px 15px 35px",
  padding: "0px",
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Faqs() {
  const [tabvalue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const [expandedGeneral, setGeneralExpanded] = React.useState<string | false>(
    "panel1"
  );

  const handleGeneralAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setGeneralExpanded(isExpanded ? panel : false);
    };

  const [expandedICO, setICOExpanded] = React.useState<string | false>(
    "panel1"
  );

  const handleICOAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setICOExpanded(isExpanded ? panel : false);
    };

  const [expandedToken, setTokenExpanded] = React.useState<string | false>(
    "panel1"
  );

  const handleTokenAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setTokenExpanded(isExpanded ? panel : false);
    };

  const [expandedClient, setClientExpanded] = React.useState<string | false>(
    "panel1"
  );

  const handleClientAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setClientExpanded(isExpanded ? panel : false);
    };

  const [expandedLegal, setLegalExpanded] = React.useState<string | false>(
    "panel1"
  );

  const handleLegalAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setLegalExpanded(isExpanded ? panel : false);
    };

  return (
    <section className="section bg-theme tc-light pb-0" id="faqs">
      <div className="container">
        <div className="section-head text-center wide-auto-sm">
          <h2 className="title title-s4" title="FAQS">
            Frequently Asked Question
          </h2>
          <p>
            Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and
            few others. If you have any other questions, please get in touch
            using the contact form below.
          </p>
        </div>
        <div className="nk-block">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <StyledTabs
                    value={tabvalue}
                    onChange={handleTabChange}
                    aria-label="basic tabs example"
                  >
                    <StyledTab
                      label="General"
                      {...a11yProps(0)}
                      disableRipple
                    />
                    <StyledTab
                      label="Pre-ICO & ICO"
                      {...a11yProps(1)}
                      disableRipple
                    />
                    <StyledTab label="Token" {...a11yProps(2)} disableRipple />
                    <StyledTab label="Client" {...a11yProps(3)} disableRipple />
                    <StyledTab label="Legal" {...a11yProps(4)} disableRipple />
                  </StyledTabs>
                </Box>
                <StyledTabPanel value={tabvalue} index={0}>
                  <StyledAccordion
                    expanded={expandedGeneral === "panel1"}
                    onChange={handleGeneralAccordionChange("panel1")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      What is ICO Crypto?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedGeneral === "panel2"}
                    onChange={handleGeneralAccordionChange("panel2")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      What cryptocurrencies can I use to purchase?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedGeneral === "panel3"}
                    onChange={handleGeneralAccordionChange("panel3")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      How can I participate in the ICO Token sale?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedGeneral === "panel4"}
                    onChange={handleGeneralAccordionChange("panel4")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      How do I benefit from the ICO Token?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                </StyledTabPanel>
                <StyledTabPanel value={tabvalue} index={1}>
                  <StyledAccordion
                    expanded={expandedICO === "panel1"}
                    onChange={handleICOAccordionChange("panel1")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      Which of us ever undertakes laborious?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedICO === "panel2"}
                    onChange={handleICOAccordionChange("panel2")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      Who do not know how to pursue rationally?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedICO === "panel3"}
                    onChange={handleICOAccordionChange("panel3")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      Their separate existence is a myth?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedICO === "panel4"}
                    onChange={handleICOAccordionChange("panel4")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      Pityful a rethoric question ran over her cheek?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                </StyledTabPanel>
                <StyledTabPanel value={tabvalue} index={2}>
                  <StyledAccordion
                    expanded={expandedToken === "panel1"}
                    onChange={handleTokenAccordionChange("panel1")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      When she reached the first hills?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedToken === "panel2"}
                    onChange={handleTokenAccordionChange("panel2")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      Big Oxmox advised her not to do?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedToken === "panel3"}
                    onChange={handleTokenAccordionChange("panel3")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      Which roasted parts of sentences fly into your mouth?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedToken === "panel4"}
                    onChange={handleTokenAccordionChange("panel4")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      Vokalia and Consonantia, there live?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                </StyledTabPanel>
                <StyledTabPanel value={tabvalue} index={3}>
                  <StyledAccordion
                    expanded={expandedClient === "panel1"}
                    onChange={handleClientAccordionChange("panel1")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      When she reached the first hills?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedClient === "panel2"}
                    onChange={handleClientAccordionChange("panel2")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      Big Oxmox advised her not to do?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedClient === "panel3"}
                    onChange={handleClientAccordionChange("panel3")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      Which roasted parts of sentences fly into your mouth?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedClient === "panel4"}
                    onChange={handleClientAccordionChange("panel4")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      Vokalia and Consonantia, there live?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                </StyledTabPanel>
                <StyledTabPanel value={tabvalue} index={4}>
                  <StyledAccordion
                    expanded={expandedLegal === "panel1"}
                    onChange={handleLegalAccordionChange("panel1")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      When she reached the first hills?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedLegal === "panel2"}
                    onChange={handleLegalAccordionChange("panel2")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      id="panel2bh-header"
                    >
                      Big Oxmox advised her not to do?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedLegal === "panel3"}
                    onChange={handleLegalAccordionChange("panel3")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      Which roasted parts of sentences fly into your mouth?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                  <StyledAccordion
                    expanded={expandedLegal === "panel4"}
                    onChange={handleLegalAccordionChange("panel4")}
                  >
                    <StyledAccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                    >
                      Vokalia and Consonantia, there live?
                    </StyledAccordionSummary>
                    <StyledAccordionDetails>
                      Once ICO period is launched, You can purchased Token with
                      Etherum, Bitcoin or Litecoin. You can also tempor
                      incididunt ut labore et dolore magna aliqua sed do eiusmod
                      eaque ipsa.
                    </StyledAccordionDetails>
                  </StyledAccordion>
                </StyledTabPanel>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
