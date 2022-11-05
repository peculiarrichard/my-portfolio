import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  height: 6rem;
  background: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  max-width: 100%;

  @media (min-width: 510px) and (max-width: 1024px){
        justify-items: center;
  }

  @media (max-width: 480px) {
    padding: 0;
    position: relative;
    display:block;
   
    .mobile{
        display:flex;
        align-items: center;
        justify-content: center;
        padding: 0.7rem;
        gap: 14rem;

    }
  }

  .nav-toggle{
    visibility: hidden;
    
      @media (max-width: 480px) {
        visibility: visible;
        font-size: 1.5rem;
        color: white;
        background: transparent;
        border-color: transparent;
        transition: all 0.3s linear;
        cursor: pointer;

        &:hover{
            color: yellow;
            transform: rotate(90deg);

        }
  }
    

  }
  .logo{
    width: 3.5rem;
    border-radius: 25px;
    margin: 3rem;

    @media (min-width: 510px) and (max-width: 1024px){
        margin: 1rem;
        align-self: center;
        justify-self-center;
        width: 3rem;
    }

    @media (max-width: 480px) {
       margin: 0.5rem;
       width: 3rem; 
    }
  }
  .nav-btn{
    width: 8rem;
    height: 3rem;
    background: yellow;
    margin: 3rem;
    border-radius: 15px;

    &:hover{
        color: gray;
        background: white;
        transition: background 0.5s ease;
        cursor: pointer;
    }

    @media (min-width: 510px) and (max-width: 1024px){
        font-size: 0.8rem;
        height: 4rem;
        padding: 0.4rem;
    }
    @media (max-width: 480px) {
       display:none; 
    }
  }
`;
export const NavbarLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 510px) and (max-width: 1024px) {
    gap: 0;
  }

  @media (min-width: 510px) and (max-width: 1024px) {
    margin: 0.5rem;
  }

  @media (max-width: 480px) {
    display: none;

    &.show-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 15rem;
      transition: all 0.3s linear;
      margin: auto;
      padding: 0;
      gap: 0;
      width: 100%;
      background: black;
      opacity: 0.6;
    }
  }
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 800;
  font-size: 1rem;
  margin: 1rem;

  @media (max-width: 480px) {
    display: block;
  }

  &:hover {
    color: yellow;
    transition: color 0.5s ease;
  }
`;
// hero styling starts here

export const Hero = styled.div`
  display: flex;
  margin: auto;
  margin-top: 1rem;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 4rem;
    color: #333637;
    margin-bottom: 1rem;

    @media (min-width: 510px) and (max-width: 1024px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
    }
  }
  p {
    color: gray;
    font-size: 1.2rem;
    font-weight: 400;

    @media (min-width: 510px) and (max-width: 1024px) {
      font-size: 0.6rem;
    }

    @media (max-width: 480px) {
      font-size: 0.55rem;
    }
  }

  .heroimg {
    height: 36rem;

    @media (min-width: 510px) and (max-width: 1024px) {
      width: 13rem;
      height: 19rem;
    }

    @media (max-width: 480px) {
      height: 13rem;
      width: 9.5rem;
      margin: 0;
    }
  }

  .marketer {
    align-self: center;
    justify-self: center;
    margin: 1rem;

    @media (max-width: 480px) {
      margin: 1rem;
    }
  }
`;

export const Services = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 6rem;

.title{
    font-size: 1rem;
    letter-spacing: 5px;
    margin: 3rem;
    color: gray;
    

    @media (max-width: 480px) {
       font-size: 0.9rem; 
    }
}
.section{
    display: flex;
    justify-content: space-evenly;

    @media (min-width: 510px) and (max-width: 1024px){
        flex-direction: column;
    }

    @media (max-width: 480px) {
       flex-direction: column; 
    }

    .service{
    width: 20rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    margin: 1rem;
    background: white;
    border-radius: 5px;
    border: 3px solid yellow;
    padding: 0 1rem;


    @media (max-width: 480px) {
       width: 16.5rem; 
    }

        img{
            width: 18rem;
            align-self: center;
            margin: 1rem;
            height: 10rem;

            @media (max-width: 480px) {
              width: 13rem;
              height: 8rem;  
            }
        }

        h2{
            color: #333637;
            font-size:1.5rem;
            text-transform: lowercase;
            margin: 0 0.5rem 0.5rem  1rem;

            @media (max-width: 480px) {
                font-size: 1.15rem; 
            }
        }

        p{
            color: gray;
            margin: 0 1rem 1rem 1rem;
            font-size: 1rem;

            @media (max-width: 480px) {
                font-size: 0.8rem; 
            }
        }

}`;

//portfolio page styling starts here
export const PortfolioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 2rem;
  }

  h1 {
    font-size: 6rem;
    margin: 1rem 0;
    letter-spacing: -3px;

    @media (min-width: 510px) and (max-width: 1024px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 3.5rem;
    }
  }
  h4 {
    color: gray;
    letter-spacing: 2px;
    font-size: 1.3rem;
    margin: 1rem 0;

    @media (min-width: 510px) and (max-width: 1024px) {
      font-size: 0.7rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  p {
    color: gray;

    @media (min-width: 510px) and (max-width: 1024px) {
      font-size: 0.6rem;
    }
    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
  }
  img {
    margin: 1rem;
    width: 23rem;
    height: 25rem;
    border-radius: 50%;

    @media (min-width: 510px) and (max-width: 1024px) {
      width: 13rem;
      height: 15rem;
    }

    @media (max-width: 480px) {
      width: 13rem;
      height: 10rem;
      margin: 1rem;
    }
  }
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 18rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media (max-width: 480px) {
    width: 20rem;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 0 0.5rem;
  }
  p {
    text-align: center;
    color: grey;
  }
  button {
    width: 10rem;
    height: 3rem;
    border-radius: 15px;
    background: gray;
    border: none;
    color: white;
    font-weight: 800;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const Repo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin: auto;
  height: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  

  @media (max-width: 480px) {
    width: 19rem;
    height: 100%;
  }

  .repolist {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    align-items: center;
    justify-content: flex-start;

    h2 {
      font-size: 1.5rem;
      margin: 0.5rem;
      color: gray;
    }
    p {
      color: gray;
      margin: 0.5rem;

      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }

    .display {
      display: flex;

      &.no-display {
        display: none;
      }
    }

    button {
      width: 6rem;
      height: 2.5rem;
      border-radius: 15px;
      background: gray;
      border: none;
      color: white;
      font-weight: 600;
      cursor: pointer;
      margin: 0.5rem;
      text-align: center;
      font-size: 0.7rem;

      &:hover {
        background-color: yellow;
        color: black;
      }

      @media (max-width: 480px) {
        width: 6rem;
        font-size: 0.7rem;
        font-weight: 400;
      }
    }
  }
`;
// footer styling
export const FooterContainer = styled.footer`
  height: 5rem;
  background: #949494;
  display: flex;
  align-items: center;
  margin-top: auto;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  justify-content: space-around;

  @media (min-width: 510px) and (max-width: 1024px) {
    .text {
      margin: 0.5rem;
    }
  }
`;
