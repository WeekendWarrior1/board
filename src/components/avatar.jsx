import React from "react";
import styled from "react-emotion";
import { colors } from "../theme";
import { getReadableCauseOfDeath } from "../utils/engine-client";

const AvatarWrapper = styled("div")({
  display: "flex",
  marginBottom: ".5rem",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  fontSize: "1.5rem",
  fontWeight: 400
});

const AvatarLeftCol = styled("div")({
  marginRight: "1rem"
});

const AvatarRightCol = styled("div")({
  width: "100%"
});

const RoundedAvatar = styled("div")(({ color }) => ({
  height: "5rem",
  width: "5rem",
  borderRadius: "50%",
  background: colors.black,
  border: `solid 5px ${color}`
}));

const Name = styled("span")({
  display: "inline-block",
  paddingBottom: ".5rem",
  color: colors.lightText
});

const HealthBarWrapper = styled("div")({
  width: "100%",
  height: "1.8rem",
  background: colors.healthBarBackground,
  color: colors.white,
  borderRadius: "15px"
});

const HealthBar = styled("div")(({ color }) => ({
  height: "100%",
  backgroundColor: color,
  borderRadius: "inherit"
}));

const CauseOfDeath = styled("div")({
  height: "100%",
  paddingTop: ".2rem",
  textAlign: "center",
  fontSize: "1.2rem",
  backgroundColor: colors.healthBarDeathBackground,
  borderRadius: "inherit"
});

class Avatar extends React.Component {
  render() {
    return (
      <AvatarWrapper>
        <AvatarLeftCol>
          <RoundedAvatar color={this.props.snake.color} />
        </AvatarLeftCol>
        <AvatarRightCol>
          <Name>{this.props.snake.name}</Name>
          <HealthBarWrapper>
            {this.props.snake.death ? (
              <CauseOfDeath>
                Dead: {getReadableCauseOfDeath(this.props.snake.death.cause)}
              </CauseOfDeath>
            ) : (
              <HealthBar
                color={this.props.snake.color}
                style={{
                  width: `${this.props.snake.health}%`
                }}
              />
            )}
          </HealthBarWrapper>
        </AvatarRightCol>
      </AvatarWrapper>
    );
  }
}

export default Avatar;
