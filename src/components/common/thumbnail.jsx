import React from 'react';

import './style/thumbnail.css';

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      <div className="image">
        <img src="" alt="" />
      </div>

      <div className="information">
        <div className="text">
          <span className="overtitle">Overtitle</span>
          <span className="title">Title</span>
          <div className="content">
            Adipiscing elit sed diam nonummy nibh euismod tincidunt ut. Quis
            nostrud exerci, tation ullamcorper suscipit lobortis nisl.
            Anteposuerit litterarum formas humanitatis per seacula quarta decima
            et quinta decima eodem modo; typi qui nunc. Feugait nulla facilisi
            nam liber, tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming. Aliquip ex ea commodo consequat duis autem vel eum
            iriure? Qui sequitur mutationem consuetudium lectorum mirum est
            notare quam littera gothica quam, nunc putamus parum. Eodem modo
            typi qui nunc nobis videntur parum clari fiant sollemnes in. Ut wisi
            enim ad minim veniam quis nostrud exerci tation ullamcorper
            suscipit.
          </div>
        </div>

        <div className="linker">
          <div />
        </div>
      </div>
    </div>
  );
}

export default Thumbnail;
