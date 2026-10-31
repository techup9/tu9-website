import { Link } from 'react-router';

export default function PageTitle({ title }) {
  return (
    <div className="top_panel_title top_panel_style_6 title_present breadcrumbs_present scheme_original">
      <div className="top_panel_title_inner top_panel_inner_style_6 title_present_inner breadcrumbs_present_inner">
        <div className="content_wrap">
          <h1 className="page_title">{title}</h1>
          <div className="breadcrumbs">
            <Link className="breadcrumbs_item home" to="/">Home</Link>
            <span className="breadcrumbs_delimiter"></span>
            <span className="breadcrumbs_item current">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
