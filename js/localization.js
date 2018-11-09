const localization = {
    eng : {
        home:'Home',
        updates: 'Latest updates',
        team: 'The Team',
        masternodes: 'Masternodes',
        techrock: 'Techrock',
        desc: 'The first fair reward for consumer contributions, in an ecosystem of safe and authentic products.',
        tryButton: 'Try it now!',
        tgFollow: 'Follow us<br>on Telegram',
        weFollow: 'Follow us<br>on Weibo',
        twiFollow: 'Follow us<br>on Twitter',
        binanceTrade: 'Trade Tael<br>on Binance',
        title: 'What is Tael?',
        subtitle: 'Tael is a loyalty token used in the Techrock ecosystem of verifiable safe and authentic products.',
        flow: 'The flow of Tael',
        flowDesc: 'Consumers are rewarded with Tael through the simple acts of purchasing and touching',
        scanLabel: 'Techrock uses Tael to incentivize consumers to touch the label, assuring the collective security',
        marketingTool: 'Merchants purchase Tael to utilize as a marketing tool and gain valuable insights',
        fullControl: 'Exchanges give consumers full control over their rewards, allowing them to gain real value',
        spendTitle: 'Spend and<br> earn like never<br> before',
        spendSub: 'Tael is added to your account by:',
        spend1: 'purchasing a product',
        spend2: 'referring your friends',
        spend3: 'verifying authenticity by scanning the Techrock label',
        spend4: 'participating in activities',
        easy: 'It’s that easy.',
        usageTitle: 'Real usage in the Techrock channel',
        usageText: 'Each product is protected by unique NFC and blockchain-backed anti-counterfeiting\n' +
            '                                        technology.<br><br>\n' +
            '                                        Counterfeiting has been a widespread problem in China and is especially\n' +
            '                                        prevalent among imported goods.',
        protectTitle: 'Protecting products that need it most',
        protectText: 'The Techrock product catalogue includes childcare, supplements, cosmetics, and personal healthcare categories.',
        loyalty: 'Next generation loyalty system for brands & merchants',
        loyaltyReward: 'Reward in a new way',
        loyaltyRewardText: 'Unlike other loyalty tokens, Tael rewards translate into real value. No expiration dates, no exchange restrictions, no fuss. Just real value for real actions.',
        loyaltyProgram: 'Loyalty program as a service',
        loyaltyProgramText: 'Merchants are given a built-in loyalty program and a new marketing channel directly linking them to their customers, without the usual costs and maintenance.',
        loyaltyMax: 'Maximize the power of data',
        loyaltyMaxText: 'Brands gain deep consumer insights impossible to acquire in other ecosystems, such as proof of consumption.',
        teamTitle: 'Meet the team',
        mediaTitle: 'In the media',
        brands: 'Brands sold on our platform',
        become: 'Become a partner',
        contact: 'Contact Us',
        contactText: 'We’re always ready to answer questions or discuss potential collaborations. Send us a message and we’ll respond as soon as possible.',
        formName: 'Name *',
        formEmail: 'Email *',
        formMessage: 'Message',
        reachOut: 'Reach Out'

    },
    chn : {
        home:'首页',
        updates: '最新消息',
        team: '团队',
        masternodes: '主节点',
        techrock: '橙石',
        desc: '首次在销售安全正品的平台上，对用户的付出作出公平奖励的数字代币',
        tryButton: '即刻体验有实用价值的代币',
        tgFollow: '加入Telegram',
        weFollow: '关注微博',
        twiFollow: '关注Twitter',
        binanceTrade: '在币安交易Tael',
        title: '什么是Tael?',
        subtitle: 'Tael 是一种在橙石的可验证正品平台上的客户忠诚计划中使用的代币。',
        flow: 'Tael 应用系统',
        flowDesc: '消费者通过购买商品或者感应标签的简单行为即可获得 Tael 的奖励',
        scanLabel: '橙石用Tael 来鼓励消费者感应智能标签，共同努力确保产品安全',
        marketingTool: '品牌和商户购买 Tael 作为营销工具获得有价值的消费者洞察',
        fullControl: '交易所将控制权交给消费者\b，\n' +
            '让他们真正从积分系统中获益。',
        spendTitle: '获取和使用的方式前所未有',
        spendSub: 'Tael is added to your account by:',
        spend1: 'purchasing a product',
        spend2: 'referring your friends',
        spend3: 'verifying authenticity by scanning the Techrock label',
        spend4: 'participating in activities',
        easy: '就是如此简单。',
        usageTitle: '在橙石的零售平台灵活使用',
        usageText: 'Each product is protected by unique NFC and blockchain-backed anti-counterfeiting technology. Counterfeiting has been a widespread problem in China and is especially prevalent among imported goods.',
        protectTitle: '最专业的保护给最重要<br/>的产品',
        protectText: '橙石平台销售的产品目前包括婴儿配方奶粉、护肤品和营养保健品。',
        loyalty: '为品牌和商户带来实惠的下一代客户忠诚计划',
        loyaltyReward: '回馈消费者的全新方式',
        loyaltyRewardText: '与其他客户忠诚计划的积分系统不同，Tael 的奖励能够直接转化为真正的价值，没有到期日，不受转换的限制，方便省事，实实在在的价值，回馈客户实实在在的行为。',
        loyaltyProgram: '作为服务的客户忠诚计划',
        loyaltyProgramText: '商户能够充分利用内置的客户忠诚计划，直接和顾客建立联系，而无需额外维护。',
        loyaltyMax: '将数据的作用最大化',
        loyaltyMaxText: '品牌能够获得其他平台无法提供的消费者的深刻洞察，例如产品实际消费的情况。',
        teamTitle: '我们的团队',
        mediaTitle: '媒体报道',
        brands: '合作品牌',
        become: '成为合作伙伴',
        contact: '联系我们',
        contactText: '我们乐意回答你的问题，或探讨任何合作机会。 发送邮件给我们，我们会尽快回复。',
        formName: '姓名 *',
        formEmail: '邮件 *',
        formMessage: '邮件内容',
        reachOut: '发送邮件'
    }
};

function localize() {
    const button = document.getElementById("changeLang");
    const button2 = document.getElementById("change");
    const lang = button.innerHTML;
    lang === 'ENG' ? button.innerText = "中文" : button.innerText = "ENG";
    lang === 'ENG' ? button2.innerText = "中文" : button2.innerText = "ENG";
    const locale = lang === 'ENG' ? 'eng' : 'chn';
    translate(locale);
}

function translate(local) {
    localImages(local);
    const dic = localization[local];
    document.querySelectorAll('[data-translate]')
      .forEach(function(node){
        node.innerHTML = dic[node.dataset.translate]
    });
    localStorage.local = local;
}

function localImages(local){
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`flow${i}`).src = `assets/images/flow${i}-${local}.png`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.local && localStorage.local === "chn") {
        const button = document.getElementById("changeLang");
        const button2 = document.getElementById("change");
        button.innerText = "ENG";
        button2.innerText = "ENG";
        translate("chn")
    }
});