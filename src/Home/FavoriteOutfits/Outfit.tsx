import React, { useState } from "react";

import { Box, RoundedIcon, BorderlessTap } from "../../components";

interface OutfitProps {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;
  };
  width: number;
}

const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessTap
      onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="m"
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
        }}
      >
        {selected && (
          <RoundedIcon
            name="check"
            backgroundColor="primary"
            color="white"
            size={24}
          />
        )}
      </Box>
    </BorderlessTap>
  );
};

export default Outfit;
