import React, { useContext } from "react";
import "./FooterStyles.css";
import { GlobalState } from "../../GlobalState";
const Footer = () => {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div>
      {!isAdmin ? (
        <footer>
          <div className="content">
            <div className="left box">
              <div className="upper">
                <div className="topic">About us</div>
                <p>
                  BoomAndDeal est Le spécialiste de la vente en ligne en
                  Tunisie. Nous disposons du plus grand choix et des meilleurs
                  prix en Tunisie
                </p>
              </div>
              <div className="lower">
                <div className="topic">Contact us</div>
                <div className="phone">
                  <a href="#">
                    <i className="fas fa-phone-volume" />
                    +216 55345592
                  </a>
                </div>
                <div className="email">
                  <a href="#">
                    <i className="fas fa-envelope" />
                    wajdigridha744@gmail.com khalil.barhoumi@hotmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="middle box">
              <div className="topic">Our Services</div>
              <div>
                <a href="#">Conseil avant vente</a>
              </div>
              <div>
                <a href="#">Sécurité des transactions</a>
              </div>
              <div>
                <a href="#">Livraison</a>
              </div>
              <div>
                <a href="#">Conditions d'utilisation</a>
              </div>
              <div>
                <a href="#">Paiement sécurisé</a>
              </div>
            </div>
            <div className="right box">
              <div className="topic">Subscribe us</div>
              <form action="#">
                <input type="text" placeholder="Enter email address" />
                <input type="submit" name="" defaultValue="Send" />
              </form>
            </div>
          </div>
          <div className="bottom">
            <p>
              Copyright © 2023 <a href="#">BoomAndDeal</a> All rights reserved
            </p>
          </div>
        </footer>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Footer;
