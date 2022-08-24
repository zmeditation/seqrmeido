import {
  Box,
  Button,
  Heading,
  FormField,
  ResponsiveContext,
  TextInput,
  Text,
  Select,
} from "grommet";
import "./mintForm.css";
import { useState } from "react";

function MintForm() {
  const [inputToken, setInputToken] = useState("BUSD");

  const handleTokenChange = (option: any) => {
    setInputToken(option);
  };

  return (
    <section
      className="section mask-c-blend-dark bg-theme-dark-alt tc-light ov-h"
      id="mint"
    >
      <ResponsiveContext.Consumer>
        {(size: string) => (
          <Box
            className="card-with-shadow"
            direction="column"
            justify="between"
            background="#343230"
            fill={size === "small" ? "horizontal" : undefined}
            height="300px"
            pad="25px"
            round="20px"
            width={size !== "small" ? "400px" : undefined}
          >
            <Box flex="grow">
              <Box
                direction="row"
                justify="between"
                margin={{ bottom: "10px" }}
              >
                <FormField className="inputForm" label="Input Amount">
                  <TextInput placeholder="" />
                </FormField>
                <div className="token-box">
                  <Text size="small">{inputToken} / SEQRME</Text>
                  <Select
                    className="select-token"
                    options={["BUSD", "USDT"]}
                    value={inputToken}
                    onChange={({ option }) => handleTokenChange(option)}
                  />
                </div>
              </Box>
              <Box
                round="8px"
                overflow="hidden"
                background="cardPlanSelect"
              ></Box>
            </Box>
            <Box
              fill
              direction="column"
              align="center"
              justify="end"
              margin="50 0 0 0"
            >
              <Heading
                responsive={false}
                level={5}
                margin={{ top: "0", bottom: "10px" }}
              >
                You Pay
              </Heading>
              <Heading
                responsive={false}
                level={2}
                margin={{ top: "0", bottom: "30px" }}
              >
                {inputToken} 0
              </Heading>
              <Button
                fill="horizontal"
                className="secondary-button"
                focusIndicator={false}
                label="APPROVE"
              />
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </section>
  );
}

export default MintForm;
