import PageWrapper from "@src/components/page_wrapper";
import PaperArticle from "@src/components/paper_article";
import Code from "@src/components/paper_code";
import Picture from "@src/components/paper_image";
import PaperWrapper from "@src/components/paper_wrapper";

export default function Article() {
  return (
    <PageWrapper>
      <PaperWrapper>
        <PaperArticle
          title="多多猫记账本草稿"
          description={
            <>
              <h2>多多猫记账本</h2>
            </>
          }
        >
          <h2>与其他记账工具的差异</h2>
          <ol>
            <li>
              账单模板：使用账单模板记录一系列的消费，比如每天固定的餐饮、交通消费等。（这个其他的也有，但通常不是主要功能）
            </li>
            <li>
              钱包核算：通常用户不可能每一笔琐碎的消费都会消费，总会出现遗漏的。所以有提醒功能，让用户在固定时间或随时通过钱包余额和消费记录进行核算，来补充遗漏或纠正错误。从而保持更准确的记账记录。
            </li>
            <li>统计显示：预算和消费的双重对比显示，分类统计。</li>
          </ol>
          <p>后续增强功能：</p>
          <ol>
            <li>家庭账本</li>
            <li>模板商店</li>
          </ol>
          <h2>领域知识</h2>
          <h3>产品里的名词</h3>
          <h4>账单(bill)</h4>
          <ol>
            <li>包含多笔记账记录</li>
          </ol>
          <h4>记账(record)</h4>
          <ol>
            <li>
              记账：通过账单模板记录每一笔消费，每一笔记账包含：时间，支出/收入，标签/分类，消费钱包属性，所属账单
            </li>
          </ol>
          <h4>钱包(wallet)</h4>
          <ol>
            <li>固定用途</li>
            <li>余额</li>
          </ol>
          <h4>预算计划</h4>
          <h3>统计图</h3>
          <ol>
            <li>
              首页展示以月为长度，每周消费金额为节点的折线图（虚线为预算计划）
            </li>
            <li>消费类目的饼图</li>
          </ol>
          <h4>消费分析/建议</h4>
          <p>？？？</p>
          <h3>数据安全，存储至个人网盘</h3>
          <p>
            <Picture
              src="/paper/images/cat_wallet_draft_safe.png"
              width="1380"
              height="888"
              border="true"
            ></Picture>
          </p>
          <p>iCloud 同步</p>
          <h2>思考</h2>
          <h3>为什么不？</h3>
          <ol>
            <li>
              为什么不显示“本月结余”等类似结余金额？答：因为大多数 App
              显示的结余金额都比较明显，但这会给使用者带来压力。我希望软件使用过程中尽可能避免这类带来压力的设计。当然，预算计划依然存在，只是会在统计图表和分析以隐含的方式展示消费和预算之间的差距，减少使用时的压力。
            </li>
          </ol>
          <h2>参考借鉴</h2>
          <h3>巨大的 emoji</h3>
          <p>
            <Picture
              src="/paper/images/cat_wallet_draft_emoji.png"
              width="1424"
              height="1586"
              border="true"
            ></Picture>
          </p>
          <h3>家庭记账</h3>
          <p>
            <a href="https://sspai.com/post/67196">参考链接</a>
          </p>
          <h3>导出功能</h3>
        </PaperArticle>
      </PaperWrapper>
    </PageWrapper>
  );
}
