// Batch of 11 projects/products (10 new collections; INNER_CITY already exists on page)
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  var storefrontConfig = {
    domain: 'imprint-works.myshopify.com',
    storefrontAccessToken: 'dec824592d198225b89ee8ff54f77d2e'
  };

  var collections = [
    { id: '682463428989', nodeId: 'collection-component-1776877726275' },
    { id: '682435510653', nodeId: 'collection-component-1776874846774' },
    { id: '682435248509', nodeId: 'collection-component-1776873242458' },
    { id: '679984038269', nodeId: 'collection-component-1776870756923' },
    { id: '672266813821', nodeId: 'collection-component-1776869581245' },
    { id: '672266322301', nodeId: 'collection-component-1776868250078' },
    { id: '679985381757', nodeId: 'collection-component-1776866870406' },
    { id: '679985152381', nodeId: 'collection-component-1776865524683' },
    { id: '679984693629', nodeId: 'collection-component-1776862196525' },
    { id: '672266781053', nodeId: 'collection-component-1776860161182' }
  ];

  function getOptions() {
    return {
      product: {
        styles: {
          product: {
            '@media (min-width: 601px)': {
              'max-width': 'calc(33.33333% - 30px)',
              'margin-left': '30px',
              'margin-bottom': '50px',
              width: 'calc(33.33333% - 30px)'
            },
            img: {
              height: 'calc(100% - 15px)',
              position: 'absolute',
              left: '0',
              right: '0',
              top: '0'
            },
            imgWrapper: {
              'padding-top': 'calc(75% + 15px)',
              position: 'relative',
              height: '0'
            }
          },
          title: {
            color: '#42f114'
          },
          button: {
            'font-size': '16px',
            'padding-top': '16px',
            'padding-bottom': '16px',
            ':hover': {
              'background-color': '#3bd912'
            },
            'background-color': '#42f114',
            ':focus': {
              'background-color': '#3bd912'
            },
            'border-radius': '25px',
            'padding-left': '15px',
            'padding-right': '15px'
          },
          quantityInput: {
            'font-size': '16px',
            'padding-top': '16px',
            'padding-bottom': '16px'
          },
          price: {
            'font-size': '16px',
            color: '#42f114'
          },
          compareAt: {
            'font-size': '13.6px',
            color: '#42f114'
          },
          unitPrice: {
            'font-size': '13.6px',
            color: '#42f114'
          }
        },
        buttonDestination: 'modal',
        contents: {
          options: false
        },
        text: {
          button: 'View product'
        }
      },
      productSet: {
        styles: {
          products: {
            '@media (min-width: 601px)': {
              'margin-left': '-30px'
            }
          }
        }
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: true,
          button: false,
          buttonWithQuantity: true
        },
        styles: {
          product: {
            '@media (min-width: 601px)': {
              'max-width': '100%',
              'margin-left': '0px',
              'margin-bottom': '0px'
            }
          },
          button: {
            'font-size': '16px',
            'padding-top': '16px',
            'padding-bottom': '16px',
            ':hover': {
              'background-color': '#3bd912'
            },
            'background-color': '#42f114',
            ':focus': {
              'background-color': '#3bd912'
            },
            'border-radius': '25px',
            'padding-left': '15px',
            'padding-right': '15px'
          },
          quantityInput: {
            'font-size': '16px',
            'padding-top': '16px',
            'padding-bottom': '16px'
          },
          title: {
            'font-family': 'Helvetica Neue, sans-serif',
            'font-weight': 'bold',
            'font-size': '27px',
            color: '#4c4c4c'
          },
          price: {
            'font-family': 'Helvetica Neue, sans-serif',
            'font-weight': 'normal',
            'font-size': '15px',
            color: '#4c4c4c'
          },
          compareAt: {
            'font-family': 'Helvetica Neue, sans-serif',
            'font-weight': 'normal',
            'font-size': '12.75px',
            color: '#4c4c4c'
          },
          unitPrice: {
            'font-family': 'Helvetica Neue, sans-serif',
            'font-weight': 'normal',
            'font-size': '12.75px',
            color: '#4c4c4c'
          },
          description: {
            'font-size': '15px'
          }
        },
        text: {
          button: 'BUY'
        }
      },
      option: {},
      cart: {
        styles: {
          button: {
            'font-size': '16px',
            'padding-top': '16px',
            'padding-bottom': '16px',
            ':hover': {
              'background-color': '#3bd912'
            },
            'background-color': '#42f114',
            ':focus': {
              'background-color': '#3bd912'
            },
            'border-radius': '25px'
          }
        },
        text: {
          total: 'Subtotal',
          button: 'Checkout'
        }
      },
      toggle: {
        styles: {
          toggle: {
            'background-color': '#42f114',
            ':hover': {
              'background-color': '#3bd912'
            },
            ':focus': {
              'background-color': '#3bd912'
            }
          },
          count: {
            'font-size': '16px'
          }
        }
      }
    };
  }

  function initCollections() {
    var client = ShopifyBuy.buildClient(storefrontConfig);
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      collections.forEach(function (collection) {
        var node = document.getElementById(collection.nodeId);
        if (!node) {
          return;
        }

        ui.createComponent('collection', {
          id: collection.id,
          node: node,
          moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
          options: getOptions()
        });
      });
    });
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = initCollections;
  }

  function start() {
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      initCollections();
    } else {
      loadScript();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
