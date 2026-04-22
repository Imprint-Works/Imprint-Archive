// INNER_CITY_UNIT_punkadelic - Shopify Collection Setup
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'imprint-works.myshopify.com',
      storefrontAccessToken: 'dec824592d198225b89ee8ff54f77d2e',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '666948600189',
        node: document.getElementById('collection-component-1776844142217'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(33.33333% - 30px)",
          "margin-left": "30px",
          "margin-bottom": "50px",
          "width": "calc(33.33333% - 30px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "title": {
        "color": "#42f114"
      },
      "button": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#3bd912"
        },
        "background-color": "#42f114",
        ":focus": {
          "background-color": "#3bd912"
        },
        "border-radius": "25px",
        "padding-left": "15px",
        "padding-right": "15px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "price": {
        "font-size": "16px",
        "color": "#42f114"
      },
      "compareAt": {
        "font-size": "13.6px",
        "color": "#42f114"
      },
      "unitPrice": {
        "font-size": "13.6px",
        "color": "#42f114"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "text": {
      "button": "View product"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-30px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#3bd912"
        },
        "background-color": "#42f114",
        ":focus": {
          "background-color": "#3bd912"
        },
        "border-radius": "25px",
        "padding-left": "15px",
        "padding-right": "15px"
      },
      "quantityInput": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "27px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "12.75px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "12.75px",
        "color": "#4c4c4c"
      },
      "description": {
        "font-size": "15px"
      }
    },
    "text": {
      "button": "BUY"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "font-size": "16px",
        "padding-top": "16px",
        "padding-bottom": "16px",
        ":hover": {
          "background-color": "#3bd912"
        },
        "background-color": "#42f114",
        ":focus": {
          "background-color": "#3bd912"
        },
        "border-radius": "25px"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#42f114",
        ":hover": {
          "background-color": "#3bd912"
        },
        ":focus": {
          "background-color": "#3bd912"
        }
      },
      "count": {
        "font-size": "16px"
      }
    }
  }
},
      });
    });
  }
})();