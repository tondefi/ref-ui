const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.frcc': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.frcs': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        },
        '.frsc': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'start',
        },

        '.frcb': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        '.fccc': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    }),
  ],
  theme: {
    screens: {
      xs: { min: '300px', max: '600px' },
      sm: '769px',
      xsm: { min: '300px', max: '1023px' },
      md: { min: '600px', max: '1023px' },
      lg: { min: '1024px' },
      lg2: { min: '1092px' },
      xl: { min: '1280px' },
      '2xl': { min: '1536px' },
      '3xl': { min: '1792px' },
    },
    boxShadow: {
      '4xl': '0px 0px 10px 4px rgba(0, 0, 0, 0.35)',
      green: '0px 0px 2px rgba(0, 198, 162, 0.5)',
      dark: '0px 0px 10px rgba(0, 0, 0, 0.15)',
      blue: '0px 0px 20px rgba(0, 255, 209, 0.6)',
      withDrawColor: '0px 0px 20px rgba(0, 255, 240, 0.6)',
    },

    extend: {
      backgroundImage: (theme) => ({
        farmSearch: 'linear-gradient(106.25deg, #00FFD1 6.88%, #00BA98 81.93%)',
        veCardGradient: 'linear-gradient(0deg, #001320 -2.77%, #1D2932 100%)',
        poolDaoBanner: 'linear-gradient(0deg, #1D2932 0%, #00A385 100%)',
        redGradient: 'linear-gradient(270deg, #7F43FF 0%, #FF8B8B 97.06%)',
        veReverseGradient:
          'linear-gradient(270deg, rgba(127, 67, 255, 0.3) 0%, rgba(0, 198, 162, 0.3) 97.06%)',
        veCardGradientRight:
          'linear-gradient(270deg, #001320 0%, #1D2932 95.06%)',
        veUserCard: 'linear-gradient(270deg, #001320 0%, #1D2932 95.06%);',
        veVotingPowerCard: 'linear-gradient(90deg, #00FFD1 0%, #009277 100%)',
        veFarmBoostCard: 'linear-gradient(90deg, #7C47FD 0%, #34177C 100%)',
        veGradient: 'linear-gradient(270deg, #7F43FF 0%, #00977C 97.06%);',
        stableTab: 'linear-gradient(180deg, #00C6A2 0%, #008B72 100%)',
        primaryGradient: 'linear-gradient(180deg, #00C6A2 0%, #008B72 100%)',
        buttonGradientBg: 'linear-gradient(180deg, #00C6A2 0%, #008B72 100%)',
        buttonGradientBgOpacity:
          'linear-gradient(180deg, rgba(0,198,162,0.8) 0%, rgba(0,139,114,0.8) 100%)',
        limitOrderButtonHover:
          'linear-gradient(180deg, #2F404D 0%, #233039 100%)',
        DCLIconGradient: 'linear-gradient(90deg, #4E4AFF 0%, #00C6A2 100%)',
        darkGradientBg: 'linear-gradient(180deg, #1D2932 0%, #001320 100%)',
        orderGradient: 'linear-gradient(180deg, #455765 0%, #223746 100%)',
        orderGraidentHover: 'linear-gradient(180deg, #62798A 0%, #334B5E 100%)',
        dclAddLiquidityFeeGradient:
          'linear-gradient(180deg, #26343E 0%, #1D2932 100%)',
        grayBoderGradient:
          'linear-gradient(180deg, rgba(126, 138, 147, 0.2) 0%, rgba(3, 5, 5, 0.2) 100%)',
        grayBoderGradientReverse:
          'linear-gradient(0deg, rgba(126, 138, 147, 0.2) 0%, rgba(3, 5, 5, 0.2) 100%)',

        darkGradientHoverBg:
          'linear-gradient(180deg, #24313A 0%, #14212B 100%)',
        switchButtonGradientBg:
          'linear-gradient(90deg, #00C6A2 24.14%, #008B72 72.41%)',
        unLockedbg: 'linear-gradient(180deg, #FFB36D 0%, #D27E00 100%)',
        boostBg:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)',
        v2boostBg:
          'linear-gradient(360deg, rgba(0, 19, 32, 0) 6.2%, #1D2932 100%)',
        boostUpBoxBg: 'linear-gradient(0deg, #273A46 0%, #15232D 100%)',
        bgGreyDefault: 'linear-gradient(180deg, #C0B1A3 0%, #92877D 100%)',
        bgGreyHover: 'linear-gradient(180deg, #E6D6C7 0%, #92877D 100%)',
        orderMobileTop: 'linear-gradient(180deg, #1D2933 0%, #283A46 100%)',
        switchIconBgColor: 'linear-gradient(180deg, #222F37 0%, #192229 100%)',
        unLoginButtonBgColor:
          'linear-gradient(rgba(0, 198, 162, 0.3) 0%, rgba(0, 139, 114, 0.3) 100%)',
        starPoolBg: 'linear-gradient(180deg, #374F5E 0%, #1D2932 100%)',
        poolBanner: 'linear-gradient(180deg, #001320 0%, #142B38 100%)',
        dclBannerColor:
          'linear-gradient(90deg, #00C6A2 2.54%, rgba(91, 64, 255, 0.5) 70%, rgba(91, 64, 255, 0) 100%)',
        dclIconBgColor: 'linear-gradient(180deg, #00C6A2 0%, #5B40FF 100%)',
        dclFarmTipColor: 'linear-gradient(270deg, #00C6A2 0%, rgba(91, 64, 255, 0) 68.86%)',
        sellGradientRed: 'linear-gradient(180deg, #944A8C 0%, #D26060 100%)',
        swapCardGradient: 'linear-gradient(180deg, #213441 0%, #15242F 100%)',
        sellGradientRedReverse:
          'linear-gradient(180deg, #944A8C 0%, #D26060 100%);',
        buyGradientGreen: 'linear-gradient(180deg, #00C6A2 0%, #008B72 100%)',
        buyGradientGreenOpacity:
          'linear-gradient(180deg,rgba(0,198,162,0.3) 0%, rgba(0,139,114,0.3) 100%)',
        greenPopUpGradient: 'linear-gradient(180deg, #5EFFEC 0%, #9CFFE7 100%)',
        RedPopUpGradient: 'linear-gradient(180deg, #FFA5DB 0%, #FFDCF1 100%);',
        greenPurpleGradient:
          'linear-gradient(270deg, #7F43FF 0%, #00C6A2 97.06%)',
        portfolioRainbowColor:
          'linear-gradient(180deg, #00C6A2 0%, #5B40FF 100%)',
        darkBlueColor:
          'linear-gradient(360deg, #1A2B35 0%, rgba(19, 33, 42, 0) 100%)',
        purpleBgColor: 'linear-gradient(180deg, #C3BDAD 0%, #AF9773 100%)',
        pendingBgColor: 'linear-gradient(180deg, #2F3A39 0%, #1D2932 100%)',
        memeVoteBgColor: 'linear-gradient(180deg, #213441 0%, #15242F 100%)',
        bannerBtnBgColor: 'linear-gradient(180deg, #00FFD1 0%, #00997D 100%)',
      }),
      gridTemplateColumns: {
        farmSearch: '2fr 1fr',
        farmContainer: '1fr 4fr',
        farmContainerOther: '1.2fr 3fr',
        xrefColumn: '7fr 13fr',
        positionContainer: '1fr 200px 80px 4fr 120px 1.5fr minmax(150px, 3fr)',
      },
      gridTemplateRows: {
        xrefContainer: '7fr 18fr',
        xrefRowM: '2fr 3fr',
        xrefContainerM: '2fr 3fr',
      },
      colors: {
        primary: '#10B981',
        primaryScale: colors.green,
        secondary: '#F9FAFB',
        secondaryScale: colors.gray,
        darkText: colors.gray['600'],
        inputBg: colors.gray['100'],
        inputText: '#374151',
        hoverGray: '#F3F4F6',
        buttonBg: '#10B981',
        swapCardBorder: 'rgba(151, 151, 151, 0.2)',
        buttonText: '#F9FAFB',
        greenLight: '#00C08B',
        greenOpacity100: 'rgba(2, 109, 97, 1)',
        whiteOpacity85: 'rgba(255, 255, 255, 0.85)',
        blackLight: '#003648',
        greenLight1: '#01C08B',
        cardBg: '#1D2932',
        portfolioCardBg: '#172833',
        chartBg: '#001320',
        perpCardBg: '#01101d',
        warn: '#DEA550',
        error: '#DE5050',
        gradientFrom: '#00c6a2',
        selectUIBg: 'rgba(58, 69, 77, 0.6)',
        selectUI: '#323E46',
        voteLabel: 'rgba(26, 35, 41, 0.6)',
        gradientTo: '#008b72',
        gradientFromHover: '#00D6AF',
        gradientToHover: '#00967B',
        poolRowHover: '#001320',
        primaryText: '#7E8A93',
        newSlippageColor: '#AABAC7',
        inputDarkBg: 'rgba(15, 13, 13, 0.2)',
        navHighLightBg: '#304452',
        navHighLightText: '#C6D1DA',
        slipBg: '#3e4e59',
        farmText: '#73818B',
        farmSplitLine: '#314351',
        farmDark: '#2B3A44',
        framBorder: '#00C6A2',
        farmSbg: '#2F3D47',
        detailCardBg: 'rgba(29, 41, 50, 0.5)',
        farmRound: '#B3C2CC',
        transakBlue: '#2F8FFF',
        farmTopRight: '#008870',
        datebg: '#637684',
        xrefbg: '#0F1D27',
        greenColor: '#00C6A2',
        xrefTab: '#293741',
        borderColor: '#7e8a93',
        warnColor: '#DE9450',
        durationBg: '#445867',
        BTCColor: '#F38632',
        NEARBlue: '#418DFF',
        acccountTab: '#0F1D27',
        acccountBlock: '#293741',
        orderBookRedBg: '#F96767',
        orderBookGreenBg: '#90E3B9',
        xREFColor: '#A7ABAD',
        purple: '#8c78ff',
        blueTip: '#0A7AFF',
        darkGreenColor: '#009A2B',
        riskTextColor: '#BEBEBE',
        senderHot: '#00FFD1',
        auroraGreen: '#70D44B',
        triPool: '#329DFF',
        refPool: '#00C6A2',
        lightGreenColor: '#00FFF0',
        tabChosen: '#4A5862',
        liqBtn: '#141D24',
        farmV2TabColor: '#4A5862',
        farmV2SmallTabCOlor: '#1A2329',
        farmV2BoxBg: '#141D24',
        farmV2WithDrawBg: '#151E29',
        farmV2TabColor: '#4A5862',
        farmV2SmallTabCOlor: '#1A2329',
        farmV2BoxBg: '#141D24',
        selectBorder: '#415462',
        farmV2WithDrawBg: '#151E29',
        maxBorderColor: '#373F45',
        darkBg2: '#132531',
        darkBg: '#111518',
        lightBg: '#C4C4C4',
        lockedBg: '#323C43',
        redwarningColor: '#FF7575',
        deepBlue: '#4627FF',
        deepBlueHover: '#7176FB',
        searchBgColor: 'rgba(29, 41, 50, 0.5)',
        lightGreyColor: '#92877D',
        dashBorderColor: '#6e7c85',
        freeTitleBg: '#404F59',
        lockTitleBg: '#0094FF',
        priceBoardColor: '#172128',
        lightRedColor: '#FF7575',
        newpurple: '#7F43FF',
        purpleColor: '#BD9FFF',
        lightPurpleColor: 'rgba(126, 69, 255, 0.2)',
        darkGreenColor: '#00CEC2',
        lightPurpleColor: 'rgba(126, 69, 255, 0.2)',
        lightBGreyColor: '#646464',
        pendingPurple: '#615EFF',
        mengColor: '#3A4D5B',
        lightGreenColor_p: '#70d44b',
        otherGreenColor: '#00E9BF',
        greyCircleColor: '#889FAE',
        farmBoostingGotoFarm: 'rgba(43, 23, 85, 0.7)',
        borderGreyColor: '#6E7C85',
        purpleColorF: 'gba(27, 27, 27, 0.24)',
        borderLightBlueColor: 'rgba(115, 129, 139, 0.5)',
        bgDarkColor: 'rgba(0, 19, 32, 0.5)',
        warnRedColor: 'rgba(255, 117, 117, 0.5)',
        darkBlackColor: '#111C24',
        v3SwapGray: '#91A2AE',
        v3borderColor: 'rgba(126, 138, 147, 0.2)',
        v3LightGreyColor: '#91A2AE',
        v3feeTextColor: '#586F80',
        v3feeBorderColor: 'rgba(145, 162, 174, 0.1)',
        v3WarningColor: '#FFA24D',
        v3BlackColor: '#1A242A',
        v3Blue: '#78C6FF',
        v3PurpleColor: 'rgba(91, 64, 255, 0.25)',
        v3GreyColor: 'rgba(126, 138, 147, 0.2)',
        v3BlueBorderColor: '#243C4D',
        v3HoverDarkBgColor: '#26343E',
        v3GarkWarningColor: '#FFA149',
        v3LiquidityTabBgColor: 'rgba(34, 45, 53, 0.8)',
        v3LiquidityRemoveBarColor: 'rgba(126, 138, 147, 0.5)',
        watchMarkBackgroundColor: '#303E49',
        v3poolWarningColor: '#FF9E44',
        menuMoreBgColor: 'rgba(126, 138, 147, 0.15)',
        menuMoreBoxBorderColor: '#304352',
        laguageBorderColor: '#42525C',
        sellColorNew: '#FF6A8E',
        switchIconBorderColor: '#304351',
        limitOrderInputColor: '#566069',
        inputV3BorderColor: '#25323C',
        inputV3BorderHoverColor: '#334653',
        selectTokenV3BgColor: 'rgba(126, 138, 147, 0.1)',
        limitOrderFeeTiersBorderColor: 'rgba(145, 162, 174, 0.2)',
        addV1PoolTableColor: '#55616A',
        pinEmptyHoverColor: '#B7C9D6',
        hoverSubBridge: '#4F6574',
        commonTokenBorderColor: 'rgba(126, 138, 147, 0.2)',
        commonCloseColor: '#454D52',
        lightReBgColor: 'rgba(255, 117, 117, 0.1)',
        feeBoxSelectedBg: '#182127',
        limitOrderBorderColor: '#344049',
        priceBgColor: '#324857',
        mobileMenuFooterColor: '#243440',
        dotColor: '#36414C',
        feeBoxBgColor: '#2E3D47',
        feeSubBoxBgColor: '#111A20',
        accountBgColor: 'rgba(255, 255, 255, 0.06)',
        accountHoverBgColor: 'rgba(255, 255, 255, 0.1)',
        feeBoxBgLiqudityColor: '#141B21',
        selectBoxBgColor: '#222D35',
        selectBoxEleColor: 'rgba(74, 88, 98, 0.3)',
        viewPoolBgColor: '#24333D',
        viewPoolHoverBgColor: '#34404A',
        positionLineBgColor: '#10202B',
        positionLineHoverBgColor: '#0B1922',
        chartTabBgColor: '#172534',
        toolTipBoxBorderColor: '#293844',
        toolTipBoxBgColor: 'rgba(29, 41, 50, 0.8)',
        boxBorder: '#1D2932',
        orderTipBg: 'rgba(29, 41, 50, 1)',
        primaryOrderly: '#7E8A93',
        sellRed: '#FF6A8E',
        buyGreen: '#90E3B9',
        orderTypeBg: '#344B5C',
        border2: '#25323C',
        border3: '#293844',
        border4: 'rgba(23, 35, 39, 1)',
        withdrawPurple: '#4627FF',
        charSymbolSelectorBg: '#1A242B',
        warn: '#FFA24D',
        darkBg: '#222F38',
        borderC: '#304352',
        greenLight: '#00FFD1',
        redLight: '#FF9FD8',
        symbolHover: 'rgba(126, 138, 147, 0.15)',
        grayBgLight: 'rgba(126, 138, 147, 0.5)',
        symbolHover2: '#1C272F',
        symbolHover3: 'rgba(126, 138, 147, 0.1)',
        feeColor: 'rgba(18, 34, 43, 1)',
        errorTip: 'rgba(249, 103, 103, 0.15)',
        textRed: '#FF7575',
        baseGreen: '#00C6A2',
        orderLineHover: '#14222D',
        poolRecentHover: 'rgba(37,51,61,0.5)',
        dark2: '#071C2B',
        dark3: '#39454E',
        assetsBorder: '#415767',
        dark4: '#2B3A45',
        dark5: '#273640',
        light1: ' rgba(126, 138, 147, 0.5)',
        allOrderHeader: '#26333E',
        withdrawPurple2: '#443F67',
        gray1: '#23313C',
        gray2: '#91A2AE',
        gray3: '#cccccc',
        txBlue: '#5285DF',
        withdrawPurple3: '#8883D7',
        positionLineBgColor: '#10202B',
        positionLineHoverBgColor: '#0B1922',
        chartTabBgColor: '#172534',
        toolTipBoxBorderColor: '#293844',
        toolTipBoxBgColor: 'rgba(29, 41, 50, 1)',
        dclFarmGreenColor: '#4DCB70',
        dclFarmBlueColor: '#4D9FFF',
        dclFarmYellowColor: '#FFC56D',
        dclFarmBlueColor: 'rgba(91, 64, 255, 0.2)',
        dclBorderColor: '#434D55',
        dclButtonBgColor: '#17252E',
        dclLineColor: 'rgba(110, 124, 133, 0.2)',
        lightBlue: '#646DF4',
        legacyButtonBgColor: '#171F25',
        dclSelectTokenHover: '#1C272F',
        farmSelectBgColor: '#212E38',
        farmSelectBoxBgColor: '#222F38',
        farmSelectHoverBgColor: '#364958',
        legacyYellowColor: '#F49F50',
        legacyBgColor: 'rgba(244, 159, 80, 0.1)',
        portfolioBgColor: '#11212C',
        portfolioFeeBgColor: 'rgba(0, 214, 162, 0.06)',
        portfolioQinColor: '#63C341',
        portfolioGreyColor: ' rgba(126, 138, 147, 0.3)',
        portfolioBarBgColor: '#172631',
        portfolioGreenColor: '#63C441',
        portfolioLightGreyColor: 'rgba(48, 68, 82, 0.5)',
        portfolioLightGreenColor: '#5FAB43',
        portfolioHoverSelectColor: '#1C272F',
        portfolioOrderCardColor: '#7E8A931A',
        navGreyColor: '#2B3741',
        selectBg: '#031928',
        mobileOrderListTab: '#182935',
        mobileOrderListBg: '#12222E',
        one_level_menu_color: '#2C3841',
        two_level_menu_color: '#38444D',
        border_grey_color: '#24313A',
        border_light_grey_color: '#1F3442',
        light_green_color: 'rgba(82, 113, 71, 0.15)',
        light_green_text_color: '#82D266',
        light_red_color: 'rgba(255, 106, 142, 0.15)',
        menuBorderColor: '#27343E',
        guideBgColor: 'rgba(0, 19, 32, 0.8)',
        burrowTabColor: '#22333E',
        burrowTableBorderColor: 'rgba(48, 67, 82, 0.5)',
        burrowTitleGreenColor: '#78FF9E',
        burrowPurpleColor: '#BCAB8F',
        burrowDarkColor: '#04121F',
        burrowTabColor: '#22333E',
        burrowTableBorderColor: 'rgba(48, 67, 82, 0.5)',
        burrowTitleGreenColor: '#78FF9E',
        burrowPurpleColor: '#BCAB8F',
        burrowDarkColor: '#04121F',
        overviewBurrowColor: '#93806E',
        overviewBurrowRedColor: '#F083BE',
        overviewBorderColor: '#263540',
        overviewLightBlueColor: '#ACE1FF',
        overviewMaskColor: 'rgba(13, 29, 39, 0.5)',
        overviewPurpleColor: '#816CFF',
        overviewGreyColor: '#314758',
        chartHoverBoxBg: 'rgba(26, 39, 48, 1)',
        chartBorderColor: '#344451',
        proTabBgColor: '#324451',
        dclTabBorderColor: '#3F4A52',
        dclYourLiquidityColor: '#283945',
        bottomBoxBorderColor: '#2F3A39',
        liquidationBorder: '#5B2E39',
        mobileOrderBg: '#324451',
        orderbookBase: '#4F6574',
        marginRedBg: '#904247',
        marginGrayBg: '#334049',
        warnYellowColor: '#DB8946',
        lightPurpleColorOrder: '#979ABE',
        memeBorderColor: 'rgba(151, 151, 151, 0.2)',
        memePoolBoxBorderColor: '#3F5361',
        memeDarkColor: '#182833',
        memeyellowColor: '#F9A43F',
        memeModelgreyColor: '#2F414E',
        memeVoteBgColor: 'rgba(0, 255, 209, 0.1)',
        memeVoteBorderColor: '#55646E',
        keyCheckBorder: '#45535D',
        warningYellowColor: '#FFB200',
        memeBorderBlackColor: '#1C2D38',
        poolDetailDarkColor: '#121D28',
        memeDonateBorderColor: '#979797',
        memeDonateBgColor: '#213441',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '25vw': '25vw',
        '35vw': '35vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        p200: '200px',
        p240: '240px',
        p70: '70px',
        p869: '869px',
        p400: '400px',
        '95vw': '95vw',
        p410: '410px',
        p450: '450px',
        p460: '460px',
        '580px': '580px',
        '700px': '700px',
        '560px': '560px',
        '360px': '360px',
        '80vw': '80vw',
        '90vw': '90vw',
        '30vw': '30vw',
        '480px': '480px',
        smartRoute: '292px',
        '1000px': '1000px',
        '1024px': '1024px',
        '1050px': '1050px',
        '1200px': '1200px',
        54: '13.5rem',
        34: '8.5rem',
      },
      maxWidth: {
        '200px': '200px',
        24: '6rem',
        28: '7rem',
        p150: '150px',
        p212: '212px',
        '1000px': '1000px',
        '1280px': '1280px',
        44: '11rem',
      },
      height: {
        vh90: '90vh',
        p560: '560px',
        vh65: '65vh',
        p500: '500px',
        p620: '620px',
      },
      minHeight: {
        8: '2rem',
        '60': '280px',
        '80': '350px',
        'screen': '100vh',
        'max': 'max-content'
      },
      minWidth: {
        p72: '72px',
        20: '5rem',
        28: '7rem',
        72: '18rem',
        36: '9rem',
        24: '6rem',
        40: '10rem',
        48: '150px',
        32: '8rem',
        '420px': '420px',
        p240: '240px',
        p90: '90px',
        p300: '300px',
      },

      fontSize: {
        '13px': '13px',
        '10px': '10px',
        '14px':'14px',
      },

      maxHeight: {
        p360: '360px',
        vh65: '65vh',
      },

      fontFamily: {
        nunito: "'Nunito', sans-serif",
        gotham: "'gotham', sans-serif",
        gothamBold: "'gothamBold', sans-serif",
      },
    },
    plugins: [],
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      borderWidth: ['hover'],
      backgroundImage: ['hover'],
      cursor: ['disabled'],
      padding: ['last'],
      display: ['hover'],
    },
  },
};
