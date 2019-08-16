var detailInfoAttrs = {
    LOAN:{
        name:
            "台账详情",
        attrs:
            [{ label:'借据编号', prop:'BILL_NO' }, { label:'合同编号', prop:'CONT_NO' }, { label:'产品主键', prop:'PRD_PK' }, { label:'产品编号', prop:'BIZ_TYPE' }, { label:'产品名称', prop:'PRD_NAME' }, { label:'产品类别', prop:'PRD_TYPE' }, { label:'客户代码', prop:'CUS_ID' }, { label:'客户名称', prop:'CUS_NAME' }, { label:'业务品种分类', prop:'BIZ_TYPE_SUB' }, { label:'核心产品号', prop:'ACCOUNT_CLASS' }, { label:'贷款帐号', prop:'LOAN_ACCOUNT' }, { label:'贷款形式', prop:'LOAN_FORM' }, { label:'贷款性质', prop:'LOAN_NATURE' }, { label:'关联交易类型', prop:'LOAN_TYPE_EXT' }, { label:'主担保方式', prop:'ASSURE_MEANS_MAIN' }, { label:'币种', prop:'CUR_TYPE' }, { label:'借据金额', prop:'LOAN_AMOUNT' }, { label:'借据余额', prop:'LOAN_BALANCE' }, { label:'贷款起始日', prop:'LOAN_START_DATE' }, { label:'贷款终止日', prop:'LOAN_END_DATE' }, { label:'期限类型', prop:'TERM_TYPE' }, { label:'原到期日期', prop:'ORIG_EXPI_DATE' }, { label:'应收利息累计', prop:'RECE_INT_CUMU' }, { label:'实收利息累计', prop:'ACTUAL_INT_CUMU' }, { label:'欠息累计', prop:'DELAY_INT_CUMU' }, { label:'还款方式', prop:'REPAYMENT_MODE' }, { label:'贷款投向', prop:'LOAN_DIRECTION' }, { label:'展期次数', prop:'EXTENSION_TIMES' }, { label:'本金逾期起始日期', prop:'CAP_OVERDUE_DATE' }, { label:'利息逾期起始日期', prop:'INT_OVERDUE_DATE' }, { label:'当前逾期期数', prop:'OVER_TIMES_CURRENT' }, { label:'累计逾期期数', prop:'OVER_TIMES_TOTAL' }, { label:'最高逾期期数', prop:'MAX_TIMES_TOTAL' }, { label:'五级分类标志', prop:'CLA' }, { label:'五级分类日期', prop:'CLA_DATE' }, { label:'上期五级分类标志', prop:'CLA_PRE' }, { label:'上期五级分类日期', prop:'CLA_DATE_PRE' }, { label:'最近还款日期', prop:'LATEST_REPAY_DATE' }, { label:'客户经理', prop:'CUS_MANAGER' }, { label:'受理机构', prop:'INPUT_BR_ID' }, { label:'账务机构', prop:'FINA_BR_ID' }, { label:'主管机构', prop:'MAIN_BR_ID' }, { label:'结清日期', prop:'SETTL_DATE' }, { label:'台帐状态', prop:'ACCOUNT_STATUS' }, { label:'科目号', prop:'GL_CLASS' }, { label:'循环贷款标识', prop:'ISCIRCLE' }, { label:'还款日', prop:'RETURN_DATE' }, { label:'备注', prop:'REMARK' }],
        url: remoteApi.apiOdsSearchACC_LOAN+"?LOAN_ACCOUNT="+getParam("id"),
    }
}