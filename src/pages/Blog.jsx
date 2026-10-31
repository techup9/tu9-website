import { Link } from 'react-router';
import PageTitle from '../components/PageTitle.jsx';
import PostInfo from '../components/PostInfo.jsx';
import { posts } from '../data/posts.js';
import { usePage } from '../hooks/usePage.js';

const BODY_CLASS =
  'blog body_style_wide body_filled article_style_stretch top_panel_show top_panel_above sidebar_show sidebar_right sidebar_outer_hide';

export default function Blog() {
  usePage({ title: 'Blog', bodyClass: BODY_CLASS });

  return (
    <>
      <PageTitle title="All Posts" />
      <div className="page_content_wrap with_padding page_paddings_yes">
        <div className="content_wrap">
          <div className="content" style={{ width: '100%' }}>
            <section className="light_section no_padding">
              <div className="container-fluid">
                {posts.map((post, i) => {
                  const href = `/blog/${post.slug}`;
                  return (
                    <article key={post.slug} className={`post_item post_item_excerpt ${i % 2 ? 'even' : 'odd'} post`}>
                      <div className="post_featured mobile_tap_hover">
                        <div className="post_thumb">
                          <Link className="hover_icon hover_icon_link taphover" to={href}>
                            <img alt={post.title} src={post.thumb} />
                          </Link>
                        </div>
                      </div>
                      <div className="post_content clearfix">
                        <h3 className="post_title">
                          <Link to={href}>
                            <span className="post_icon icon-book-open"></span>
                            {post.title}
                          </Link>
                        </h3>
                        <PostInfo post={post} />
                        <div className="post_descr">
                          <p>{post.excerpt}</p>
                          <Link to={href} className="sc_button sc_button_square sc_button_style_filled sc_button_size_medium">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}

                <nav id="pagination" className="pagination_wrap pagination_pages">
                  <span className="pager_current active">1</span>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#" className="pager_dot">&hellip;</a>
                  <a href="#" className="pager_next" aria-label="Next page"></a>
                  <a href="#" className="pager_last" aria-label="Last page"></a>
                </nav>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
