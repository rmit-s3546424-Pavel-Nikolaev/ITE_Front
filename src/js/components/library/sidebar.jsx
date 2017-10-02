import React from 'react';
import TreeFile from './tree-file';
import TreeFolder from './tree-folder';

export default class SideBar extends React.Component {
    render() {
        return (
            <section id="sidebar">
                <a id="upload" className="uploader_button">Upload Music</a>
                <div id="file-tree">
                    <div className="folder-container">
                        <TreeFolder title="Pop music 2016" />
                        <TreeFile title="Closer | Chains..." />
                        <TreeFile title="Can't Stop the F..." />
                        <TreeFile title="Panda | Desiigner" />
                        <div className="folder-container">
                            <TreeFolder title="End of Year" />
                            <TreeFile title="Sorry | Ju..." />
                        </div>
                    </div>
                    <TreeFile title="Let the Bodies Hit th..." />
                    <TreeFile title="Mary Had a Little Lam..." />
                </div>
            </section>
        )
    }
}


