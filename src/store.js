const type = ['单选','多选','判断','简答'];
const testData = [{
    testType: 1,
    testtopic: '户籍在B省的何某2013年6月从A省的某医药院校药学专业本科毕业后，应聘到A省某一药品零售连锁企业，该企业在A省C市、B省D市都设有连锁门店。自2013年7月起，何某开始在该企业A省C市的某一连锁门店从事药品销售工作。',
    testmark: 5,
    testanswerId: 'B',
    testId: 2145475,
    testtitle: '如果何某打算参加国家执业药师资格考试，哪一年可以报名参加',
    testoptions: [
        { optionName: 'A', optionContent: '2014年' },
        { optionName: 'B', optionContent: '2016年' },
        { optionName: 'C', optionContent: '2018年' },
        { optionName: 'D', optionContent: '2020年' },
    ],
    testAnalysis: '解析：药学、中药学或相关专业大学本科学历工作满3年，可以报名参加全国执业药师资格考试。故选B。',
    testUserAnswerId: '',
}, {
    testType: 1,
    testtopic: '',
    testmark: 5,
    testanswerId: 'B',
    testId: 2145476,
    testtitle: '如果何某打算参加国家执业药师资格考试，哪一年可以报名参加????',
    testoptions: [
        { optionName: 'A', optionContent: '2014年' },
        { optionName: 'B', optionContent: '2016年' },
        { optionName: 'C', optionContent: '2018年' },
        { optionName: 'D', optionContent: '2020年' },
    ],
    testAnalysis: '解析：药学、中药学或相关专业大学本科学历工作满3年，可以报名参加全国执业药师资格考试。故选B。',
    testUserAnswerId: '',
},{
    testType: 1,
    testtopic: 'A.尊重同仁，密切协作 <br>B.尊重患者，一视同仁 <br>C.依法执业，质量第一 <br>D.进德修业，珍视声誉',
    testmark: 5,
    testanswerId: 'A',
    testId: 305222,
    testtitle: '属于“执业药师应紧密配合医师对患者进行药物治疗”的是',
    testoptions: [
        { optionName: 'A', optionContent: '' },
        { optionName: 'B', optionContent: '' },
        { optionName: 'C', optionContent: '' },
        { optionName: 'D', optionContent: '' },
    ],
    testAnalysis: '解析：执业药师应当与同仁和医护人员相互理解，相互信任，以诚相待，密切配合，建立和谐的工作关系，共同为药学事业的发展和人类的健康奉献力量。',
    testUserAnswerId: '',
},{
    testType: 2,
    testtopic: '',
    testmark: 15,
    testanswerId: 'A',
    testId: 305222,
    testtitle: '执业药师的职责包括',
    testoptions: [
        { optionName: 'A', optionContent: '负责本单位的药品质量管理' },
        { optionName: 'B', optionContent: '负责提供用药咨询与信息' },
        { optionName: 'C', optionContent: '负责处方的审核及监督调配' },
        { optionName: 'D', optionContent: '开展治疗药物的监测及药品疗效的评价'},
    ],
    testAnalysis: '解析：执业药师具体职责：①执业药师必须遵守职业道德，忠于职守，以对药品质量负责、保证公众用药安全有效为基本准则；②执业药师必须严格执行《药品管理法》及国家有关药品研制、生产、经营、使用的各项法规及政策，对违反《药品管理法》及有关法规的行为或决定，有责任提出劝告、制止、拒绝执行并向上级报告；③执业药师在执业范围内负责对药品质量的监督和管理，参与制定、实施药品全面质量管理及对本单位违反规定的处理；④执业药师负责处方的审核及监督调配，提供用药咨询与信息，指导合理用药，开展治疗药物的监测及药品疗效的评价等临床药学工作。',
    testUserAnswerId: '',
},{
    testType: 3,
    testtopic: '',
    testmark: 15,
    testanswerId: '对',
    testId: 304706,
    testtitle: '执业药师的职责包括',
    testoptions: [
        { optionName: '对', optionContent: '' },
        { optionName: '错', optionContent: '' },
    ],
    testAnalysis: '解析：执业药师具体职责：①执业药师必须遵守职业道德，忠于职守，以对药品质量负责、保证公众用药安全有效为基本准则；②执业药师必须严格执行《药品管理法》及国家有关药品研制、生产、经营、使用的各项法规及政策，对违反《药品管理法》及有关法规的行为或决定，有责任提出劝告、制止、拒绝执行并向上级报告；③执业药师在执业范围内负责对药品质量的监督和管理，参与制定、实施药品全面质量管理及对本单位违反规定的处理；④执业药师负责处方的审核及监督调配，提供用药咨询与信息，指导合理用药，开展治疗药物的监测及药品疗效的评价等临床药学工作。',
    testUserAnswerId: '',
},{
    testType: 4,
    testtopic: '资料如下：<br> （1）现金盘盈659元，原因待查。<br> （2）现金盘盈原因无法查明，报经有关部门批准后进行会计处理。<br> （3）原材料盘亏2070元，原因待查。<br> （4）经查明，原材料盘亏属于正常损失，报经有关部门批准后进行会计处理。<br> （5）盘盈一台未入账的设备，该设备市场价格为48200元，估计的新旧程度为9成新。则作为前期会计差错计入“以前年度损益调整”账户的金额为（）。',
    testmark: 15,
    testanswerId: '',
    testId: 304706,
    testtitle: '1、编制甲公司（1）的会计分录',
    testoptions: [],
    testAnalysis: '解析：执业药师具体职责：①执业药师必须遵守职业道德，忠于职守，以对药品质量负责、保证公众用药安全有效为基本准则；②执业药师必须严格执行《药品管理法》及国家有关药品研制、生产、经营、使用的各项法规及政策，对违反《药品管理法》及有关法规的行为或决定，有责任提出劝告、制止、拒绝执行并向上级报告；③执业药师在执业范围内负责对药品质量的监督和管理，参与制定、实施药品全面质量管理及对本单位违反规定的处理；④执业药师负责处方的审核及监督调配，提供用药咨询与信息，指导合理用药，开展治疗药物的监测及药品疗效的评价等临床药学工作。',
    testUserAnswerId: '',
}];

export {type,testData};