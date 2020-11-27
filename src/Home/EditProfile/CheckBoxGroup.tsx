import React, { useState } from "react";

import { Box, Button, useTheme } from "../../components";

interface CheckBoxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckBoxGroup = ({ options, radio }: CheckBoxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const theme = useTheme();
  return (
    <Box flexDirection="row" flexWrap="wrap" marginTop="s">
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;
        return (
          <Button
            key={value}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            label={label}
            style={{
              width: "auto",
              height: "auto",
              padding: 16,
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckBoxGroup;
