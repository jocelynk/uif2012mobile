<!DOCTYPE html>
<!-- saved from url=(0067)https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js -->
<html style="" class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms no-csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths no-csspositionsticky filereader eventsource"><head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Overthrow/overthrow.js at master · filamentgroup/Overthrow · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="https://github.com/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://github.com/filamentgroup/Overthrow/blob/master/apple-touch-icon-114.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://github.com/filamentgroup/Overthrow/blob/master/apple-touch-icon-114.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://github.com/filamentgroup/Overthrow/blob/master/apple-touch-icon-144.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://github.com/filamentgroup/Overthrow/blob/master/apple-touch-icon-144.png">
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="https://github.com/favicon.ico">

    <meta content="authenticity_token" name="csrf-param">
<meta content="NqNHEW3g/bF05FdFtBCZEKOWBhfW7xQAzsgSTmGtndc=" name="csrf-token">

    <link href="./overthrow_files/github-0985ec09f4a36e3462381f1788c903c09c5d94d6.css" media="screen" rel="stylesheet" type="text/css">
    <link href="./overthrow_files/github2-8fa43eb7ec103bd3bf79be09cf64db52d75c244f.css" media="screen" rel="stylesheet" type="text/css">
    


    <script type="text/javascript" async="" id="gauges-tracker" data-site-id="4f5634b5613f5d0429000010" src="./overthrow_files/track.js"></script><script src="./overthrow_files/frameworks-57542e0cba19d068168099f287c117efa142863c.js" type="text/javascript"></script>
    <script src="./overthrow_files/github-650ee832daf5d46d78829c3f98d1e97bab858056.js" type="text/javascript"></script><script type="text/javascript" async="" src="./overthrow_files/ga.js"></script>
    

      <link rel="permalink" href="https://github.com/filamentgroup/Overthrow/blob/a9b67fc3fface4b8bcfdcd04afddcf32ec8f31f8/overthrow.js">
    <meta property="og:title" content="Overthrow">
    <meta property="og:type" content="githubog:gitrepository">
    <meta property="og:url" content="https://github.com/filamentgroup/Overthrow">
    <meta property="og:image" content="https://secure.gravatar.com/avatar/78676b98c89c800808e1f7198f5992b1?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png">
    <meta property="og:site_name" content="GitHub">
    <meta property="og:description" content="Overthrow - A tiny, no-frills, framework-independent, targeted overflow: auto polyfill for use in responsive design.">

    <meta name="description" content="Overthrow - A tiny, no-frills, framework-independent, targeted overflow: auto polyfill for use in responsive design.">

  <link href="https://github.com/filamentgroup/Overthrow/commits/master.atom" rel="alternate" title="Recent Commits to Overthrow:master" type="application/atom+xml">

  </head>


  <body class="logged_in  linux vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

            
  <a href="https://github.com/notifications" class="notification-indicator tooltipped downwards" original-title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


              
  <div class="topsearch command-bar-activated">
    <form accept-charset="UTF-8" action="https://github.com/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="https://github.com/search/advanced" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" original-title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="jocelynk" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" original-title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>



    <ul class="top-nav">
        <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li><a href="https://gist.github.com/">Gist</a></li>
        <li><a href="https://github.com/blog">Blog</a></li>
      <li><a href="http://help.github.com/">Help</a></li>
    </ul>
  </div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/jocelynk" class="name">
          <img height="20" src="./overthrow_files/88f255417d6039139486cb3bd39ab76d" width="20"> jocelynk
        </a>
      </li>
      <li>
        <a href="https://github.com/new" id="new_repo" class="tooltipped downwards" original-title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="https://github.com/settings/profile" id="account_settings" class="tooltipped downwards" original-title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="https://github.com/logout" data-method="post" id="logout" class="tooltipped downwards" original-title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope="" itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="https://github.com/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="NqNHEW3g/bF05FdFtBCZEKOWBhfW7xQAzsgSTmGtndc="></div>  <input id="repository_id" name="repository_id" type="hidden" value="3406056">
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included">
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed">
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore">
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="https://github.com/filamentgroup/Overthrow/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="https://github.com/filamentgroup/Overthrow/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="https://github.com/filamentgroup/Overthrow/stargazers">238</a>
          </li>

              <li>
                <a href="https://github.com/filamentgroup/Overthrow/fork_select" class="minibutton js-toggler-target lighter" rel="facebox nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="https://github.com/filamentgroup/Overthrow/network" class="social-count">21</a>
              </li>


    </ul>

              <h1 itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="https://github.com/filamentgroup" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">filamentgroup</span>
                  </a></span> /
                <strong><a href="https://github.com/filamentgroup/Overthrow" class="js-current-repository">Overthrow</a></strong>
              </h1>
            </div>

            

  <ul class="tabs with-details-box">
    <li><a href="https://github.com/filamentgroup/Overthrow" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="https://github.com/filamentgroup/Overthrow/network" highlight="repo_network">Network</a></li>
    <li><a href="https://github.com/filamentgroup/Overthrow/pulls" highlight="repo_pulls">Pull Requests <span class="counter">0</span></a></li>

      <li><a href="https://github.com/filamentgroup/Overthrow/issues" highlight="repo_issues">Issues <span class="counter">13</span></a></li>

      <li><a href="https://github.com/filamentgroup/Overthrow/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="https://github.com/filamentgroup/Overthrow/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
  <div id="repo_details" class="metabox clearfix
        not-editable" style="display: none;">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request…</div>

        <div class="repo-desc-homepage">
          
    <div class="repository-lang-stats">
      <div class="repository-lang-stats-graph">
      <span class="language-color" style="width:100%; background-color:#f15501;" itemprop="keywords">JavaScript</span>
      </div>
      <ol class="list-tip">
        <li>
            <a href="https://github.com/languages/JavaScript">
              <span class="color-block language-color" style="background-color:#f15501;"></span>
              <span class="lang">JavaScript</span>
              <span class="percent">100%</span>
            </a>
        </li>
      </ol>
    </div>

<div id="repository_description" class="repository-description">
    <p>A tiny, no-frills, framework-independent, targeted overflow: auto polyfill for use in responsive design.
      <span id="read_more" style="display: none;">— <a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#readme">Read more</a></span>
    </p>
</div>


<div class="repository-homepage" id="repository_homepage">
  <p></p>
</div>


        </div>

      <div class="edit-repo-desc-homepage" style="display:none">
        <form accept-charset="UTF-8" action="https://github.com/filamentgroup/Overthrow/admin/update_meta" id="js-update-repo-meta-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="_method" type="hidden" value="put"><input name="authenticity_token" type="hidden" value="NqNHEW3g/bF05FdFtBCZEKOWBhfW7xQAzsgSTmGtndc="></div>
          <p class="error" style="display:none">Sorry, but there was a problem saving your changes.</p>
          <div>
            <input type="text" id="repository-description-field" class="description-field" name="repo_description" value="A tiny, no-frills, framework-independent, targeted overflow: auto polyfill for use in responsive design." placeholder="Add a description to this repository">

            <input type="text" id="repository-homepage-field" class="homepage-field" name="repo_homepage" value="" placeholder="Add a website to this repository">
          </div>

          <button type="submit" class="classy save-button">Save Changes</button>
          <p class="cancel"><a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#" class="danger">Cancel</a></p>
</form>      </div>

      
<div class="url-box">
  <ul class="native-clones">
      <li><a href="https://github.com/filamentgroup/Overthrow/archive/master.zip" class="minibutton " icon_class="mini-icon-download" rel="nofollow" title="Download this repository as a zip file"><span class="mini-icon mini-icon-download"></span>ZIP</a>
  </li></ul>

  <ul class="clone-urls">
    <li class="http_clone_url"><a href="https://github.com/filamentgroup/Overthrow.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">HTTP</a></li>
<li class="public_clone_url"><a href="https://github.com/filamentgroup/Overthrow/blob/master/git@github.com:filamentgroup/Overthrow.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">SSH</a></li>
<li class="public_clone_url selected"><a href="git://github.com/filamentgroup/Overthrow.git" class="js-git-protocol-selector" data-permission="Read-Only" data-url="/users/set_protocol?protocol_selector=gitweb&amp;protocol_type=clone">Git Read-Only</a></li>
  </ul>
  <input type="text" spellcheck="false" class="url-field" value="git://github.com/filamentgroup/Overthrow.git">
  <span class="js-clippy mini-icon mini-icon-clippy url-box-clippy" data-clipboard-text="git://github.com/filamentgroup/Overthrow.git" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
  <p class="url-description"><span class="bold js-clone-url-permission">Read-Only</span> access</p>
</div>

        </div>

<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
      <li><a href="https://github.com/filamentgroup/Overthrow/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
      <li><a href="https://github.com/filamentgroup/Overthrow/downloads" class="tabnav-tab" highlight="repo_downloads">Downloads <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#" class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree" data-hotkey="w" data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable js-filterable-field" placeholder="Filter branches/tags">
            <ul class="tabs with-details-box">
              <li><a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches">
            <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="https://github.com/filamentgroup/Overthrow/tree/gh-pages" class="js-navigation-open" data-name="gh-pages" rel="nofollow">gh-pages</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="https://github.com/filamentgroup/Overthrow/tree/master" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="https://github.com/filamentgroup/Overthrow/tree/nesting-refactor" class="js-navigation-open" data-name="nesting-refactor" rel="nofollow">nesting-refactor</a>
                  </h4>
                </div>
            </div>
            <div class="no-results">Nothing to show</div>
          </div>

            <div class="js-filter-tab js-filter-tags filter-tab-empty" style="display:none">
              <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">
              </div>
              <div class="no-results">Nothing to show</div>
            </div>
        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="https://github.com/filamentgroup/Overthrow" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="https://github.com/filamentgroup/Overthrow/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="https://github.com/filamentgroup/Overthrow/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">3</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container="">
          


    

<!-- tree commit key: views10/v8/tree:v21:8b4806e15c2d0527addc8b2b55fd4646 -->

  <div id="slider">


        <p class="history-link js-history-link-replace" data-path="/" style="display: none;">
<a href="https://github.com/filamentgroup/Overthrow/commits/master">              <span class="mini-icon mini-icon-history tooltipped" original-title="Browse commits for this branch"></span>
              46 commits
</a>        </p><p title="This is a placeholder element" class="js-history-link-replace hidden"></p>


      <div class="breadcrumb" data-path="/" style="display: none;">
        <span class="bold"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/filamentgroup/Overthrow" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">Overthrow</span></a></span></span> / 
      </div><div class="breadcrumb" data-path="overthrow.js/">
      <span class="bold"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="https://github.com/filamentgroup/Overthrow" class="js-slider-breadcrumb" itemscope="url"><span itemprop="title">Overthrow</span></a></span></span> / <strong class="final-path">overthrow.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="overthrow.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div><div class="commit file-history-tease" data-path="overthrow.js/">
    <img class="main-avatar" height="24" src="./overthrow_files/f6d5229f000f5f54b21792d4228f2fab" width="24">
    <span class="author"><a href="https://github.com/scottjehl">scottjehl</a></span>
    <time class="js-relative-date" datetime="2012-02-22T06:36:22-08:00" title="2012-02-22 06:36:22">9 months ago</time>
    <div class="commit-title">
        <a href="https://github.com/filamentgroup/Overthrow/commit/610804d946f128c6c5a27dd2a834232ca6658997" class="message">URL updates</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="./overthrow_files/f6d5229f000f5f54b21792d4228f2fab" width="24">
          <a href="https://github.com/scottjehl">scottjehl</a>
        </li>
      </ul>
    </div>
  </div>

      <a href="https://github.com/filamentgroup/Overthrow/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        

  <div class="frames">
    <div class="frame" data-path="/" data-permalink-url="/filamentgroup/Overthrow/tree/a9b67fc3fface4b8bcfdcd04afddcf32ec8f31f8" data-title="filamentgroup/Overthrow · GitHub" data-type="tree" style="margin-left: -1200px;">

      <div class="bubble tree-browser-wrapper">

      <div class="commit commit-tease js-details-container">
    <p class="commit-title ">
        <a href="https://github.com/filamentgroup/Overthrow/commit/a9b67fc3fface4b8bcfdcd04afddcf32ec8f31f8" class="message">Merge pull request </a><a class="issue-link" title="added intercept call to terminate existing scroll events" href="https://github.com/filamentgroup/Overthrow/issues/7">#7</a><a href="https://github.com/filamentgroup/Overthrow/commit/a9b67fc3fface4b8bcfdcd04afddcf32ec8f31f8" class="message"> from hillmark/anchorscroll-clickhandler</a>
        <span class="hidden-text-expander inline"><a href="javascript:;" class="js-details-target">…</a></span>
    </p>
      <div class="commit-desc"><pre>added intercept call to terminate existing scroll events</pre></div>
    <div class="commit-meta">
      <a href="https://github.com/filamentgroup/Overthrow/commit/a9b67fc3fface4b8bcfdcd04afddcf32ec8f31f8" class="sha-block">latest commit <span class="sha">a9b67fc3ff</span></a>
      <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="a9b67fc3fface4b8bcfdcd04afddcf32ec8f31f8" data-copied-hint="copied!" data-copy-hint="Copy SHA"></span>

      <div class="authorship">
        <img class="gravatar" height="20" src="./overthrow_files/f6d5229f000f5f54b21792d4228f2fab" width="20">
        <span class="author-name"><a href="https://github.com/scottjehl" rel="contributor">scottjehl</a></span>
        authored <time class="js-relative-date updated" datetime="2012-05-22T09:37:29-07:00" title="2012-05-22 09:37:29">6 months ago</time>

      </div>
    </div>
  </div><table class="tree-browser css-truncate" cellpadding="0" cellspacing="0">
        <thead>
            
  

        </thead>

        

<tbody class="tree-entries " data-url="/filamentgroup/Overthrow/tree-commits/master">


    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="https://github.com/filamentgroup/Overthrow/tree/master/examples" class="js-slide-to css-truncate-target" id="bfebe34154a0dfd9fc7b447fc9ed74e9-2d9604e0ad4a87a4643dcd49a1a15a9eb7bd8a7f" title="examples">examples</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-02-21T23:25:32-08:00" title="2012-02-21 23:25:32">9 months ago</time></td>

      <td class="message">
          <a href="https://github.com/filamentgroup/Overthrow/commit/2b298f445af6a3a552095f1833a648b8d85e304b" class="message">demo updates</a> [<a href="https://github.com/scottjehl" rel="author">scottjehl</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="https://github.com/filamentgroup/Overthrow/tree/master/extensions" class="js-slide-to css-truncate-target" id="2ac737d240fc746cef37129b7569f08e-808b1fa577b8b9e427707fe2b0d48bfb5084fc3b" title="extensions">extensions</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-03-21T04:45:36-07:00" title="2012-03-21 04:45:36">9 months ago</time></td>

      <td class="message">
          <a href="https://github.com/filamentgroup/Overthrow/commit/b82e9a598ba793ca6516d755180808e91336fb16" class="message">added intercept call to terminate existing scroll events</a> [<a href="https://github.com/hillmark" rel="author">hillmark</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-directory"></span></td>
      <td class="content"><a href="https://github.com/filamentgroup/Overthrow/tree/master/test" class="js-slide-to css-truncate-target" id="098f6bcd4621d373cade4e832627b4f6-6900d9461e20b9627c253084dfefc75ad34873da" title="test">test</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-02-21T22:13:01-08:00" title="2012-02-21 22:13:01">10 months ago</time></td>

      <td class="message">
          <a href="https://github.com/filamentgroup/Overthrow/commit/44d52cfcc431079c25e1ff94ada6a1dce79d08a1" class="message">updated js, css, examples, and unit tests to use 'overflow-enabled' a…</a> [<a href="https://github.com/scottjehl" rel="author">scottjehl</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="https://github.com/filamentgroup/Overthrow/blob/master/README.md" class="js-slide-to css-truncate-target" id="04c6e90faac2675aa89e2176d2eec7d8-89ef67c283d6cc9823f877e058a06aef602c0fbf" title="README.md">README.md</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-03-07T09:37:34-08:00" title="2012-03-07 09:37:34">9 months ago</time></td>

      <td class="message">
          <a href="https://github.com/filamentgroup/Overthrow/commit/0bb242c043e8e16e3fc3ae4abc5ec3bf431be413" class="message">Update README.md</a> [<a href="https://github.com/jney" rel="author">jney</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="https://github.com/filamentgroup/Overthrow/blob/master/index.html" class="js-slide-to css-truncate-target" id="eacf331f0ffc35d4b482f1d15a887d3b-d01f0a18fa554e5d21decc277bd67a21e10967e9" title="index.html">index.html</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-02-22T06:36:22-08:00" title="2012-02-22 06:36:22">9 months ago</time></td>

      <td class="message">
          <a href="https://github.com/filamentgroup/Overthrow/commit/610804d946f128c6c5a27dd2a834232ca6658997" class="message">URL updates</a> [<a href="https://github.com/scottjehl" rel="author">scottjehl</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="https://github.com/filamentgroup/Overthrow/blob/master/license.txt" class="js-slide-to css-truncate-target" id="98cd14c95bb22f9d397da0603a77d950-affd0547e64d7ca78d2afdac02f24a0a46a2e9a3" title="license.txt">license.txt</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-02-21T19:21:41-08:00" title="2012-02-21 19:21:41">10 months ago</time></td>

      <td class="message">
          <a href="https://github.com/filamentgroup/Overthrow/commit/b17edec7b477bccb839809dce6256476b9be310c" class="message">added external license and changed it to MIT/BSD</a> [<a href="https://github.com/scottjehl" rel="author">scottjehl</a>]

      </td>
    </tr>
    <tr>
      <td class="icon"><span class="mini-icon mini-icon-text-file"></span></td>
      <td class="content"><a href="./overthrow_files/overthrow.js" class="js-slide-to css-truncate-target" id="e42e0d58ca0a60636d5e8ba0370ab20f-8c6be44a27cd757810b60c8c426c5371395a06d4" title="overthrow.js">overthrow.js</a></td>
      <td class="age"><time class="js-relative-date" datetime="2012-02-22T06:36:22-08:00" title="2012-02-22 06:36:22">9 months ago</time></td>

      <td class="message">
          <a href="https://github.com/filamentgroup/Overthrow/commit/610804d946f128c6c5a27dd2a834232ca6658997" class="message">URL updates</a> [<a href="https://github.com/scottjehl" rel="author">scottjehl</a>]

      </td>
    </tr>
</tbody>

      </table>
      </div>

        <!-- readme cache key: tree-readme:3406056:89ef67c283d6cc9823f877e058a06aef602c0fbf -->
        <div id="readme" class="clearfix announce instapaper_body md" data-path="/" style="display: none;">
          <span class="name"><span class="mini-icon mini-icon-readme"></span> README.md</span><article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1>
<a name="overthrow" class="anchor" href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#overthrow"><span class="mini-icon mini-icon-link"></span></a>Overthrow</h1>

<p>A tiny, no-frills, framework-independent, targeted <code>overflow: auto</code> polyfill for use in responsive design.</p>

<ul>
<li>
<strong>Overthrow Site &amp; Documentation:</strong> <a href="http://filamentgroup.github.com/Overthrow/">http://filamentgroup.github.com/Overthrow/</a>
</li>
<li>
<strong>Filament Group Release Notes:</strong> <a href="http://filamentgroup.com/lab/overthrow">Overthrow: An overflow: auto polyfill for responsive design</a>
</li>
</ul><p>License: <a href="http://filamentgroup.github.com/Overthrow/license.txt">Open-source, Dual MIT/BSD license</a></p>

<p>Copyright 2012: Scott Jehl, Filament Group, Inc. </p>

<p>See the project site for detailed documentation.</p>

<h2>
<a name="project-goals" class="anchor" href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#project-goals"><span class="mini-icon mini-icon-link"></span></a>Project Goals</h2>

<p>The goals of Overthrow are simple: create a reliable way to safely use CSS overflow in responsive designs, polyfilling support in non-native environments where possible. As such, the scope is very tight, and we're mostly looking for contributions to make it do what it already does better, rather than add more features. That said, we are interested in exposing hooks and events to make it easy to extend so that Overthrow could be used for more custom behavior, like snapping to regions. If you have ideas for improvements, please send a pull request!</p>

<h2>
<a name="basic-use" class="anchor" href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#basic-use"><span class="mini-icon mini-icon-link"></span></a>Basic use</h2>

<p>First, download and reference overthrow.js from your document. Anywhere's fine.</p>

<pre><code>&lt;script src="overthrow.js"&gt;&lt;/script&gt;
</code></pre>

<p>Then put a class of <code>overthrow</code> on any elements in which you'd like to apply <code>overflow: auto</code> or <code>scroll</code> CSS.</p>

<pre><code>&lt;div id="foo" class="overthrow"&gt;Content goes here!&lt;/div&gt;
</code></pre>

<p>In browsers that Overthrow deems capable of scrolling overflow content (_either natively, or using its touch polyfill_), it will add a class of <code>overthrow-enabled</code> to the <code>html</code> element. Add the following CSS to your stylesheet somewhere, enabling overflow on all elements in your document that have an <code>overthrow</code> class.</p>

<pre><code>/* Overthrow CSS:
   Enable overflow: auto on elements with overthrow class when html element has overthrow class too */
.overthrow-enabled .overthrow {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
</code></pre>

<p>That's it. Design away! Any time you want to set dimensions on an element to use overflow scrolling, just be sure to key off that <code>overthrow</code> class on the HTML element, and <code>overflow: auto</code> will apply.</p>

<pre><code>.overthrow-enabled #foo {
    height: 280px;
}
</code></pre>

<h2>
<a name="tests" class="anchor" href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#tests"><span class="mini-icon mini-icon-link"></span></a>Tests</h2>

<p>Unit tests use QUnit and can be run from the /test/ directory.</p></article>
        </div>
    </div><div class="frame frame-center" data-path="overthrow.js/" data-permalink-url="/filamentgroup/Overthrow/blob/a9b67fc3fface4b8bcfdcd04afddcf32ec8f31f8/overthrow.js" data-title="Overthrow/overthrow.js at master · filamentgroup/Overthrow · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>366 lines (311 sloc)</span>
                <span>13.377 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards" href="https://github.com/filamentgroup/Overthrow/edit/master/overthrow.js" data-method="post" rel="nofollow" original-title="Clicking this button will automatically fork this project so you can edit the file">Edit</a>
                  </li>
                <li><a href="https://github.com/filamentgroup/Overthrow/raw/master/overthrow.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="https://github.com/filamentgroup/Overthrow/blame/master/overthrow.js" class="minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="https://github.com/filamentgroup/Overthrow/commits/master/overthrow.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tbody><tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class="line" id="LC1"><span class="cm">/*! Overthrow v.0.1.0. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */</span></div><div class="line" id="LC2"><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">w</span><span class="p">,</span> <span class="kc">undefined</span> <span class="p">){</span></div><div class="line" id="LC3"><br></div><div class="line" id="LC4">	<span class="kd">var</span> <span class="nx">doc</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span></div><div class="line" id="LC5">		<span class="nx">docElem</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span></div><div class="line" id="LC6">		<span class="nx">classtext</span> <span class="o">=</span> <span class="s2">"overthrow-enabled"</span><span class="p">,</span></div><div class="line" id="LC7"><br></div><div class="line" id="LC8">		<span class="c1">// Touch events are used in the polyfill, and thus are a prerequisite</span></div><div class="line" id="LC9">		<span class="nx">canBeFilledWithPoly</span> <span class="o">=</span> <span class="s2">"ontouchmove"</span> <span class="k">in</span> <span class="nx">doc</span><span class="p">,</span></div><div class="line" id="LC10"><br></div><div class="line" id="LC11">		<span class="c1">// The following attempts to determine whether the browser has native overflow support</span></div><div class="line" id="LC12">		<span class="c1">// so we can enable it but not polyfill</span></div><div class="line" id="LC13">		<span class="nx">overflowProbablyAlreadyWorks</span> <span class="o">=</span> </div><div class="line" id="LC14">			<span class="c1">// Features-first. iOS5 overflow scrolling property check - no UA needed here. thanks Apple :)</span></div><div class="line" id="LC15">			<span class="s2">"WebkitOverflowScrolling"</span> <span class="k">in</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">style</span> <span class="o">||</span></div><div class="line" id="LC16">			<span class="c1">// Touch events aren't supported and screen width is greater than X</span></div><div class="line" id="LC17">			<span class="c1">// ...basically, this is a loose "desktop browser" check. </span></div><div class="line" id="LC18">			<span class="c1">// It may wrongly opt-in very large tablets with no touch support.</span></div><div class="line" id="LC19">			<span class="p">(</span> <span class="o">!</span><span class="nx">canBeFilledWithPoly</span> <span class="o">&amp;&amp;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">screen</span><span class="p">.</span><span class="nx">width</span> <span class="o">&gt;</span> <span class="mi">1200</span> <span class="p">)</span> <span class="o">||</span></div><div class="line" id="LC20">			<span class="c1">// Hang on to your hats.</span></div><div class="line" id="LC21">			<span class="c1">// Whitelist some popular, overflow-supporting mobile browsers for now and the future</span></div><div class="line" id="LC22">			<span class="c1">// These browsers are known to get overlow support right, but give us no way of detecting it.</span></div><div class="line" id="LC23">			<span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC24">				<span class="kd">var</span> <span class="nx">ua</span> <span class="o">=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">,</span></div><div class="line" id="LC25">					<span class="c1">// Webkit crosses platforms, and the browsers on our list run at least version 534</span></div><div class="line" id="LC26">					<span class="nx">webkit</span> <span class="o">=</span> <span class="nx">ua</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="sr">/AppleWebKit\/([0-9]+)/</span> <span class="p">),</span></div><div class="line" id="LC27">					<span class="nx">wkversion</span> <span class="o">=</span> <span class="nx">webkit</span> <span class="o">&amp;&amp;</span> <span class="nx">webkit</span><span class="p">[</span><span class="mi">1</span><span class="p">],</span></div><div class="line" id="LC28">					<span class="nx">wkLte534</span> <span class="o">=</span> <span class="nx">webkit</span> <span class="o">&amp;&amp;</span> <span class="nx">wkversion</span> <span class="o">&gt;=</span> <span class="mi">534</span><span class="p">;</span></div><div class="line" id="LC29"><br></div><div class="line" id="LC30">				<span class="k">return</span> <span class="p">(</span></div><div class="line" id="LC31">					<span class="cm">/* Android 3+ with webkit gte 534</span></div><div class="line" id="LC32"><span class="cm">					~: Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13 */</span></div><div class="line" id="LC33">					<span class="nx">ua</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="sr">/Android ([0-9]+)/</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="o">&gt;=</span> <span class="mi">3</span> <span class="o">&amp;&amp;</span> <span class="nx">wkLte534</span> <span class="o">||</span></div><div class="line" id="LC34">					<span class="cm">/* Blackberry 7+ with webkit gte 534</span></div><div class="line" id="LC35"><span class="cm">					~: Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0 Mobile Safari/534.11+ */</span></div><div class="line" id="LC36">					<span class="nx">ua</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="sr">/ Version\/([0-9]+)/</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">w</span><span class="p">.</span><span class="nx">blackberry</span> <span class="o">&amp;&amp;</span> <span class="nx">wkLte534</span> <span class="o">||</span></div><div class="line" id="LC37">					<span class="cm">/* Blackberry Playbook with webkit gte 534</span></div><div class="line" id="LC38"><span class="cm">					~: Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+ */</span>   </div><div class="line" id="LC39">					<span class="nx">ua</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="sr">/PlayBook/</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="o">&gt;=</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">wkLte534</span> <span class="o">||</span></div><div class="line" id="LC40">					<span class="cm">/* Firefox Mobile (Fennec) 4 and up</span></div><div class="line" id="LC41"><span class="cm">					~: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7; rv:2.1.1) Gecko/ Firefox/4.0.2pre Fennec/4.0. */</span></div><div class="line" id="LC42">					<span class="nx">ua</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="sr">/Fennec\/([0-9]+)/</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="o">&gt;=</span> <span class="mi">4</span> <span class="o">||</span></div><div class="line" id="LC43">					<span class="cm">/* WebOS 3 and up (TouchPad too)</span></div><div class="line" id="LC44"><span class="cm">					~: Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.48 Safari/534.6 TouchPad/1.0 */</span></div><div class="line" id="LC45">					<span class="nx">ua</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="sr">/wOSBrowser\/([0-9]+)/</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span> <span class="o">&gt;=</span> <span class="mi">233</span> <span class="o">&amp;&amp;</span> <span class="nx">wkLte534</span> <span class="o">||</span></div><div class="line" id="LC46">					<span class="cm">/* Nokia Browser N8</span></div><div class="line" id="LC47"><span class="cm">					~: Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.0 Mobile Safari/533.4 3gpp-gba </span></div><div class="line" id="LC48"><span class="cm">					~: Note: the N9 doesn't have native overflow with one-finger touch. wtf */</span></div><div class="line" id="LC49">					<span class="nx">ua</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span> <span class="sr">/NokiaBrowser\/([0-9\.]+)/</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">)</span> <span class="o">===</span> <span class="mf">7.3</span> <span class="o">&amp;&amp;</span> <span class="nx">webkit</span> <span class="o">&amp;&amp;</span> <span class="nx">wkversion</span> <span class="o">&gt;=</span> <span class="mi">533</span></div><div class="line" id="LC50">				<span class="p">);</span></div><div class="line" id="LC51">			<span class="p">})(),</span></div><div class="line" id="LC52"><br></div><div class="line" id="LC53">		<span class="c1">// Easing can use any of Robert Penner's equations (http://www.robertpenner.com/easing_terms_of_use.html). By default, overthrow includes ease-out-cubic</span></div><div class="line" id="LC54">		<span class="c1">// arguments: t = current iteration, b = initial value, c = end value, d = total iterations</span></div><div class="line" id="LC55">		<span class="c1">// use w.overthrow.easing to provide a custom function externally, or pass an easing function as a callback to the toss method</span></div><div class="line" id="LC56">		<span class="nx">defaultEasing</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">t</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">c</span><span class="p">,</span> <span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC57">			<span class="k">return</span> <span class="nx">c</span><span class="o">*</span><span class="p">((</span><span class="nx">t</span><span class="o">=</span><span class="nx">t</span><span class="o">/</span><span class="nx">d</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">*</span><span class="nx">t</span><span class="o">*</span><span class="nx">t</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="nx">b</span><span class="p">;</span></div><div class="line" id="LC58">		<span class="p">},</span>	</div><div class="line" id="LC59"><br></div><div class="line" id="LC60">		<span class="nx">enabled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span></div><div class="line" id="LC61"><br></div><div class="line" id="LC62">		<span class="c1">// Keeper of intervals</span></div><div class="line" id="LC63">		<span class="nx">timeKeeper</span><span class="p">,</span></div><div class="line" id="LC64"><br></div><div class="line" id="LC65">		<span class="cm">/* toss scrolls and element with easing</span></div><div class="line" id="LC66"><span class="cm">		</span></div><div class="line" id="LC67"><span class="cm">		// elem is the element to scroll</span></div><div class="line" id="LC68"><span class="cm">		// options hash:</span></div><div class="line" id="LC69"><span class="cm">			* left is the desired horizontal scroll. Default is "+0". For relative distances, pass a string with "+" or "-" in front.</span></div><div class="line" id="LC70"><span class="cm">			* top is the desired vertical scroll. Default is "+0". For relative distances, pass a string with "+" or "-" in front.</span></div><div class="line" id="LC71"><span class="cm">			* duration is the number of milliseconds the throw will take. Default is 100.</span></div><div class="line" id="LC72"><span class="cm">			* easing is an optional custom easing function. Default is w.overthrow.easing. Must follow the easing function signature </span></div><div class="line" id="LC73"><span class="cm">		*/</span></div><div class="line" id="LC74">		<span class="nx">toss</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="nx">options</span> <span class="p">){</span></div><div class="line" id="LC75">			<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class="line" id="LC76">				<span class="nx">sLeft</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span></div><div class="line" id="LC77">				<span class="nx">sTop</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">,</span></div><div class="line" id="LC78">				<span class="c1">// Toss defaults</span></div><div class="line" id="LC79">				<span class="nx">o</span> <span class="o">=</span> <span class="p">{</span></div><div class="line" id="LC80">					<span class="nx">top</span><span class="o">:</span> <span class="s2">"+0"</span><span class="p">,</span></div><div class="line" id="LC81">					<span class="nx">left</span><span class="o">:</span> <span class="s2">"+0"</span><span class="p">,</span></div><div class="line" id="LC82">					<span class="nx">duration</span><span class="o">:</span> <span class="mi">100</span><span class="p">,</span></div><div class="line" id="LC83">					<span class="nx">easing</span><span class="o">:</span> <span class="nx">w</span><span class="p">.</span><span class="nx">overthrow</span><span class="p">.</span><span class="nx">easing</span></div><div class="line" id="LC84">				<span class="p">},</span></div><div class="line" id="LC85">				<span class="nx">endLeft</span><span class="p">,</span> <span class="nx">endTop</span><span class="p">;</span></div><div class="line" id="LC86"><br></div><div class="line" id="LC87">			<span class="c1">// Mixin based on predefined defaults</span></div><div class="line" id="LC88">			<span class="k">if</span><span class="p">(</span> <span class="nx">options</span> <span class="p">){</span></div><div class="line" id="LC89">				<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">j</span> <span class="k">in</span> <span class="nx">o</span> <span class="p">){</span></div><div class="line" id="LC90">					<span class="k">if</span><span class="p">(</span> <span class="nx">options</span><span class="p">[</span> <span class="nx">j</span> <span class="p">]</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="p">){</span></div><div class="line" id="LC91">						<span class="nx">o</span><span class="p">[</span> <span class="nx">j</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">options</span><span class="p">[</span> <span class="nx">j</span> <span class="p">];</span></div><div class="line" id="LC92">					<span class="p">}</span></div><div class="line" id="LC93">				<span class="p">}</span></div><div class="line" id="LC94">			<span class="p">}</span></div><div class="line" id="LC95"><br></div><div class="line" id="LC96">			<span class="c1">// Convert relative values to ints</span></div><div class="line" id="LC97">			<span class="c1">// First the left val</span></div><div class="line" id="LC98">			<span class="k">if</span><span class="p">(</span> <span class="k">typeof</span> <span class="nx">o</span><span class="p">.</span><span class="nx">left</span> <span class="o">===</span> <span class="s2">"string"</span> <span class="p">){</span></div><div class="line" id="LC99">				<span class="nx">o</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">o</span><span class="p">.</span><span class="nx">left</span> <span class="p">);</span></div><div class="line" id="LC100">				<span class="nx">endLeft</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">sLeft</span><span class="p">;</span></div><div class="line" id="LC101">			<span class="p">}</span></div><div class="line" id="LC102">			<span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC103">				<span class="nx">endLeft</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span></div><div class="line" id="LC104">				<span class="nx">o</span><span class="p">.</span><span class="nx">left</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="nx">sLeft</span><span class="p">;</span></div><div class="line" id="LC105">			<span class="p">}</span></div><div class="line" id="LC106">			<span class="c1">// Then the top val</span></div><div class="line" id="LC107">			<span class="k">if</span><span class="p">(</span> <span class="k">typeof</span> <span class="nx">o</span><span class="p">.</span><span class="nx">top</span> <span class="o">===</span> <span class="s2">"string"</span> <span class="p">){</span></div><div class="line" id="LC108">				<span class="nx">o</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span> <span class="nx">o</span><span class="p">.</span><span class="nx">top</span> <span class="p">);</span></div><div class="line" id="LC109">				<span class="nx">endTop</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">sTop</span><span class="p">;</span></div><div class="line" id="LC110">			<span class="p">}</span></div><div class="line" id="LC111">			<span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC112">				<span class="nx">endTop</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></div><div class="line" id="LC113">				<span class="nx">o</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">sTop</span><span class="p">;</span></div><div class="line" id="LC114">			<span class="p">}</span></div><div class="line" id="LC115"><br></div><div class="line" id="LC116">			<span class="nx">timeKeeper</span> <span class="o">=</span> <span class="nx">setInterval</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span>					</div><div class="line" id="LC117">				<span class="k">if</span><span class="p">(</span> <span class="nx">i</span><span class="o">++</span> <span class="o">&lt;</span> <span class="nx">o</span><span class="p">.</span><span class="nx">duration</span> <span class="p">){</span></div><div class="line" id="LC118">					<span class="nx">elem</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">easing</span><span class="p">(</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">sLeft</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">left</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">duration</span> <span class="p">);</span></div><div class="line" id="LC119">					<span class="nx">elem</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">easing</span><span class="p">(</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">sTop</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">top</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">duration</span> <span class="p">);</span></div><div class="line" id="LC120">				<span class="p">}</span></div><div class="line" id="LC121">				<span class="k">else</span><span class="p">{</span></div><div class="line" id="LC122">					<span class="k">if</span><span class="p">(</span> <span class="nx">endLeft</span> <span class="o">!==</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="p">){</span></div><div class="line" id="LC123">						<span class="nx">elem</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">endLeft</span><span class="p">;</span></div><div class="line" id="LC124">					<span class="p">}</span></div><div class="line" id="LC125">					<span class="k">if</span><span class="p">(</span> <span class="nx">endTop</span> <span class="o">!==</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="p">){</span></div><div class="line" id="LC126">						<span class="nx">elem</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">endTop</span><span class="p">;</span></div><div class="line" id="LC127">					<span class="p">}</span></div><div class="line" id="LC128">					<span class="nx">intercept</span><span class="p">();</span></div><div class="line" id="LC129">				<span class="p">}</span></div><div class="line" id="LC130">			<span class="p">},</span> <span class="mi">1</span> <span class="p">);</span></div><div class="line" id="LC131"><br></div><div class="line" id="LC132">			<span class="c1">// Return the values, post-mixin, with end values specified</span></div><div class="line" id="LC133">			<span class="k">return</span> <span class="p">{</span> <span class="nx">top</span><span class="o">:</span> <span class="nx">endTop</span><span class="p">,</span> <span class="nx">left</span><span class="o">:</span> <span class="nx">endLeft</span><span class="p">,</span> <span class="nx">duration</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">duration</span><span class="p">,</span> <span class="nx">easing</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">easing</span> <span class="p">};</span></div><div class="line" id="LC134">		<span class="p">},</span></div><div class="line" id="LC135"><br></div><div class="line" id="LC136">		<span class="c1">// find closest overthrow (elem or a parent)</span></div><div class="line" id="LC137">		<span class="nx">closest</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">target</span><span class="p">,</span> <span class="nx">ascend</span> <span class="p">){</span></div><div class="line" id="LC138">			<span class="k">return</span> <span class="o">!</span><span class="nx">ascend</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span><span class="p">.</span><span class="nx">className</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span> <span class="s2">"overthrow"</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">target</span> <span class="o">||</span> <span class="nx">closest</span><span class="p">(</span> <span class="nx">target</span><span class="p">.</span><span class="nx">parentNode</span> <span class="p">);</span></div><div class="line" id="LC139">		<span class="p">},</span></div><div class="line" id="LC140"><br></div><div class="line" id="LC141">		<span class="c1">// Intercept any throw in progress</span></div><div class="line" id="LC142">		<span class="nx">intercept</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC143">			<span class="nx">clearInterval</span><span class="p">(</span> <span class="nx">timeKeeper</span> <span class="p">);</span></div><div class="line" id="LC144">		<span class="p">},</span></div><div class="line" id="LC145"><br></div><div class="line" id="LC146">		<span class="c1">// Enable and potentially polyfill overflow</span></div><div class="line" id="LC147">		<span class="nx">enable</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC148"><br></div><div class="line" id="LC149">			<span class="c1">// If it's on, </span></div><div class="line" id="LC150">			<span class="k">if</span><span class="p">(</span> <span class="nx">enabled</span> <span class="p">){</span></div><div class="line" id="LC151">				<span class="k">return</span><span class="p">;</span></div><div class="line" id="LC152">			<span class="p">}</span></div><div class="line" id="LC153">			<span class="c1">// It's on.</span></div><div class="line" id="LC154">			<span class="nx">enabled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class="line" id="LC155"><br></div><div class="line" id="LC156">			<span class="c1">// If overflowProbablyAlreadyWorks or at least the element canBeFilledWithPoly, add a class to cue CSS that assumes overflow scrolling will work (setting height on elements and such)</span></div><div class="line" id="LC157">			<span class="k">if</span><span class="p">(</span> <span class="nx">overflowProbablyAlreadyWorks</span> <span class="o">||</span> <span class="nx">canBeFilledWithPoly</span> <span class="p">){</span></div><div class="line" id="LC158">				<span class="nx">docElem</span><span class="p">.</span><span class="nx">className</span> <span class="o">+=</span> <span class="s2">" "</span> <span class="o">+</span> <span class="nx">classtext</span><span class="p">;</span></div><div class="line" id="LC159">			<span class="p">}</span></div><div class="line" id="LC160"><br></div><div class="line" id="LC161">			<span class="c1">// Destroy everything later. If you want to.</span></div><div class="line" id="LC162">			<span class="nx">w</span><span class="p">.</span><span class="nx">overthrow</span><span class="p">.</span><span class="nx">forget</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC163">				<span class="c1">// Strip the class name from docElem</span></div><div class="line" id="LC164">				<span class="nx">docElem</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="nx">docElem</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="nx">classtext</span><span class="p">,</span> <span class="s2">""</span> <span class="p">);</span></div><div class="line" id="LC165">				<span class="c1">// Remove touch binding (check for method support since this part isn't qualified by touch support like the rest)</span></div><div class="line" id="LC166">				<span class="k">if</span><span class="p">(</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">removeEventListener</span> <span class="p">){</span></div><div class="line" id="LC167">					<span class="nx">doc</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span> <span class="s2">"touchstart"</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class="line" id="LC168">				<span class="p">}</span></div><div class="line" id="LC169">				<span class="c1">// reset easing to default</span></div><div class="line" id="LC170">				<span class="nx">w</span><span class="p">.</span><span class="nx">overthrow</span><span class="p">.</span><span class="nx">easing</span> <span class="o">=</span> <span class="nx">defaultEasing</span><span class="p">;</span></div><div class="line" id="LC171"><br></div><div class="line" id="LC172">				<span class="c1">// Let 'em know</span></div><div class="line" id="LC173">				<span class="nx">enabled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class="line" id="LC174">			<span class="p">};</span></div><div class="line" id="LC175"><br></div><div class="line" id="LC176">			<span class="c1">// If overflowProbablyAlreadyWorks or it doesn't look like the browser canBeFilledWithPoly, our job is done here. Exit viewport left.</span></div><div class="line" id="LC177">			<span class="k">if</span><span class="p">(</span> <span class="nx">overflowProbablyAlreadyWorks</span> <span class="o">||</span> <span class="o">!</span><span class="nx">canBeFilledWithPoly</span> <span class="p">){</span></div><div class="line" id="LC178">				<span class="k">return</span><span class="p">;</span></div><div class="line" id="LC179">			<span class="p">}</span></div><div class="line" id="LC180"><br></div><div class="line" id="LC181">			<span class="c1">// Fill 'er up!</span></div><div class="line" id="LC182">			<span class="c1">// From here down, all logic is associated with touch scroll handling</span></div><div class="line" id="LC183">				<span class="c1">// elem references the overthrow element in use</span></div><div class="line" id="LC184">			<span class="kd">var</span> <span class="nx">elem</span><span class="p">,</span></div><div class="line" id="LC185"><br></div><div class="line" id="LC186">				<span class="c1">// The last several Y values are kept here</span></div><div class="line" id="LC187">				<span class="nx">lastTops</span> <span class="o">=</span> <span class="p">[],</span></div><div class="line" id="LC188"><br></div><div class="line" id="LC189">				<span class="c1">// The last several X values are kept here</span></div><div class="line" id="LC190">				<span class="nx">lastLefts</span> <span class="o">=</span> <span class="p">[],</span></div><div class="line" id="LC191"><br></div><div class="line" id="LC192">				<span class="c1">// lastDown will be true if the last scroll direction was down, false if it was up</span></div><div class="line" id="LC193">				<span class="nx">lastDown</span><span class="p">,</span></div><div class="line" id="LC194"><br></div><div class="line" id="LC195">				<span class="c1">// lastRight will be true if the last scroll direction was right, false if it was left</span></div><div class="line" id="LC196">				<span class="nx">lastRight</span><span class="p">,</span></div><div class="line" id="LC197"><br></div><div class="line" id="LC198">				<span class="c1">// For a new gesture, or change in direction, reset the values from last scroll</span></div><div class="line" id="LC199">				<span class="nx">resetVertTracking</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC200">					<span class="nx">lastTops</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC201">					<span class="nx">lastDown</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC202">				<span class="p">},</span></div><div class="line" id="LC203"><br></div><div class="line" id="LC204">				<span class="nx">resetHorTracking</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC205">					<span class="nx">lastLefts</span> <span class="o">=</span> <span class="p">[];</span></div><div class="line" id="LC206">					<span class="nx">lastRight</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class="line" id="LC207">				<span class="p">},</span></div><div class="line" id="LC208"><br></div><div class="line" id="LC209">				<span class="c1">// After releasing touchend, throw the overthrow element, depending on momentum</span></div><div class="line" id="LC210">				<span class="nx">finishScroll</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC211">					<span class="c1">// Come up with a distance and duration based on how </span></div><div class="line" id="LC212">					<span class="c1">// Multipliers are tweaked to a comfortable balance across platforms</span></div><div class="line" id="LC213">					<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">lastTops</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="o">-</span> <span class="nx">lastTops</span><span class="p">[</span> <span class="nx">lastTops</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span><span class="mi">1</span> <span class="p">]</span> <span class="p">)</span> <span class="o">*</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC214">						<span class="nx">left</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">lastLefts</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="o">-</span> <span class="nx">lastLefts</span><span class="p">[</span> <span class="nx">lastLefts</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span><span class="mi">1</span> <span class="p">]</span> <span class="p">)</span> <span class="o">*</span> <span class="mi">8</span><span class="p">,</span></div><div class="line" id="LC215">						<span class="nx">duration</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span> <span class="nx">left</span> <span class="p">),</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span> <span class="nx">top</span> <span class="p">)</span> <span class="p">)</span> <span class="o">/</span> <span class="mi">8</span><span class="p">;</span></div><div class="line" id="LC216"><br></div><div class="line" id="LC217">					<span class="c1">// Make top and left relative-style strings (positive vals need "+" prefix)</span></div><div class="line" id="LC218">					<span class="nx">top</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">top</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="s2">"+"</span> <span class="o">:</span> <span class="s2">""</span> <span class="p">)</span> <span class="o">+</span> <span class="nx">top</span><span class="p">;</span></div><div class="line" id="LC219">					<span class="nx">left</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">left</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="s2">"+"</span> <span class="o">:</span> <span class="s2">""</span> <span class="p">)</span> <span class="o">+</span> <span class="nx">left</span><span class="p">;</span></div><div class="line" id="LC220"><br></div><div class="line" id="LC221">					<span class="c1">// Make sure there's a significant amount of throw involved, otherwise, just stay still</span></div><div class="line" id="LC222">					<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nb">isNaN</span><span class="p">(</span> <span class="nx">duration</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">duration</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span> <span class="nx">left</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="mi">80</span> <span class="o">||</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span> <span class="nx">top</span> <span class="p">)</span> <span class="o">&gt;</span> <span class="mi">80</span> <span class="p">)</span> <span class="p">){</span></div><div class="line" id="LC223">						<span class="nx">toss</span><span class="p">(</span> <span class="nx">elem</span><span class="p">,</span> <span class="p">{</span> <span class="nx">left</span><span class="o">:</span> <span class="nx">left</span><span class="p">,</span> <span class="nx">top</span><span class="o">:</span> <span class="nx">top</span><span class="p">,</span> <span class="nx">duration</span><span class="o">:</span> <span class="nx">duration</span> <span class="p">}</span> <span class="p">);</span></div><div class="line" id="LC224">					<span class="p">}</span></div><div class="line" id="LC225">				<span class="p">},</span></div><div class="line" id="LC226"><br></div><div class="line" id="LC227">				<span class="c1">// On webkit, touch events hardly trickle through textareas and inputs</span></div><div class="line" id="LC228">				<span class="c1">// Disabling CSS pointer events makes sure they do, but it also makes the controls innaccessible</span></div><div class="line" id="LC229">				<span class="c1">// Toggling pointer events at the right moments seems to do the trick</span></div><div class="line" id="LC230">				<span class="c1">// Thanks Thomas Bachem http://stackoverflow.com/a/5798681 for the following</span></div><div class="line" id="LC231">				<span class="nx">inputs</span><span class="p">,</span></div><div class="line" id="LC232">				<span class="nx">setPointers</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">val</span> <span class="p">){</span></div><div class="line" id="LC233">					<span class="nx">inputs</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span> <span class="s2">"textarea, input"</span> <span class="p">);</span></div><div class="line" id="LC234">					<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">il</span> <span class="o">=</span> <span class="nx">inputs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">il</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class="line" id="LC235">						<span class="nx">inputs</span><span class="p">[</span> <span class="nx">i</span> <span class="p">].</span><span class="nx">style</span><span class="p">.</span><span class="nx">pointerEvents</span> <span class="o">=</span> <span class="nx">val</span><span class="p">;</span></div><div class="line" id="LC236">					<span class="p">}</span></div><div class="line" id="LC237">				<span class="p">},</span></div><div class="line" id="LC238"><br></div><div class="line" id="LC239">				<span class="c1">// For nested overthrows, changeScrollTarget restarts a touch event cycle on a parent or child overthrow</span></div><div class="line" id="LC240">				<span class="nx">changeScrollTarget</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">startEvent</span><span class="p">,</span> <span class="nx">ascend</span> <span class="p">){</span></div><div class="line" id="LC241">					<span class="k">if</span><span class="p">(</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createEvent</span> <span class="p">){</span></div><div class="line" id="LC242">						<span class="kd">var</span> <span class="nx">newTarget</span> <span class="o">=</span> <span class="p">(</span> <span class="o">!</span><span class="nx">ascend</span> <span class="o">||</span> <span class="nx">ascend</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">parentNode</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">touchchild</span> <span class="o">||</span> <span class="nx">elem</span><span class="p">,</span></div><div class="line" id="LC243">							<span class="nx">tEnd</span><span class="p">;</span></div><div class="line" id="LC244"><br></div><div class="line" id="LC245">						<span class="k">if</span><span class="p">(</span> <span class="nx">newTarget</span> <span class="o">!==</span> <span class="nx">elem</span> <span class="p">){</span></div><div class="line" id="LC246">							<span class="nx">tEnd</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">(</span> <span class="s2">"HTMLEvents"</span> <span class="p">);</span></div><div class="line" id="LC247">							<span class="nx">tEnd</span><span class="p">.</span><span class="nx">initEvent</span><span class="p">(</span> <span class="s2">"touchend"</span><span class="p">,</span> <span class="kc">true</span><span class="p">,</span> <span class="kc">true</span> <span class="p">);</span></div><div class="line" id="LC248">							<span class="nx">elem</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">tEnd</span> <span class="p">);</span></div><div class="line" id="LC249">							<span class="nx">newTarget</span><span class="p">.</span><span class="nx">touchchild</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">;</span></div><div class="line" id="LC250">							<span class="nx">elem</span> <span class="o">=</span> <span class="nx">newTarget</span><span class="p">;</span></div><div class="line" id="LC251">							<span class="nx">newTarget</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span> <span class="nx">startEvent</span> <span class="p">);</span></div><div class="line" id="LC252">						<span class="p">}</span></div><div class="line" id="LC253">					<span class="p">}</span></div><div class="line" id="LC254">				<span class="p">},</span></div><div class="line" id="LC255"><br></div><div class="line" id="LC256">				<span class="c1">// Touchstart handler</span></div><div class="line" id="LC257">				<span class="c1">// On touchstart, touchmove and touchend are freshly bound, and all three share a bunch of vars set by touchstart</span></div><div class="line" id="LC258">				<span class="c1">// Touchend unbinds them again, until next time</span></div><div class="line" id="LC259">				<span class="nx">start</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">e</span> <span class="p">){</span></div><div class="line" id="LC260"><br></div><div class="line" id="LC261">					<span class="c1">// Stop any throw in progress</span></div><div class="line" id="LC262">					<span class="nx">intercept</span><span class="p">();</span></div><div class="line" id="LC263"><br></div><div class="line" id="LC264">					<span class="c1">// Reset the distance and direction tracking</span></div><div class="line" id="LC265">					<span class="nx">resetVertTracking</span><span class="p">();</span></div><div class="line" id="LC266">					<span class="nx">resetHorTracking</span><span class="p">();</span></div><div class="line" id="LC267"><br></div><div class="line" id="LC268">					<span class="nx">elem</span> <span class="o">=</span> <span class="nx">closest</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span> <span class="p">);</span></div><div class="line" id="LC269"><br></div><div class="line" id="LC270">					<span class="k">if</span><span class="p">(</span> <span class="o">!</span><span class="nx">elem</span> <span class="o">||</span> <span class="nx">elem</span> <span class="o">===</span> <span class="nx">docElem</span> <span class="o">||</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="p">){</span></div><div class="line" id="LC271">						<span class="k">return</span><span class="p">;</span></div><div class="line" id="LC272">					<span class="p">}</span>			</div><div class="line" id="LC273"><br></div><div class="line" id="LC274">					<span class="nx">setPointers</span><span class="p">(</span> <span class="s2">"none"</span> <span class="p">);</span></div><div class="line" id="LC275">					<span class="kd">var</span> <span class="nx">touchStartE</span> <span class="o">=</span> <span class="nx">e</span><span class="p">,</span></div><div class="line" id="LC276">						<span class="nx">scrollT</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollTop</span><span class="p">,</span></div><div class="line" id="LC277">						<span class="nx">scrollL</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollLeft</span><span class="p">,</span></div><div class="line" id="LC278">						<span class="nx">height</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetHeight</span><span class="p">,</span></div><div class="line" id="LC279">						<span class="nx">width</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">offsetWidth</span><span class="p">,</span></div><div class="line" id="LC280">						<span class="nx">startY</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span><span class="p">,</span></div><div class="line" id="LC281">						<span class="nx">startX</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">,</span></div><div class="line" id="LC282">						<span class="nx">scrollHeight</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollHeight</span><span class="p">,</span></div><div class="line" id="LC283">						<span class="nx">scrollWidth</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">scrollWidth</span><span class="p">,</span></div><div class="line" id="LC284"><br></div><div class="line" id="LC285">						<span class="c1">// Touchmove handler</span></div><div class="line" id="LC286">						<span class="nx">move</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">e</span> <span class="p">){</span></div><div class="line" id="LC287"><br></div><div class="line" id="LC288">							<span class="kd">var</span> <span class="nx">ty</span> <span class="o">=</span> <span class="nx">scrollT</span> <span class="o">+</span> <span class="nx">startY</span> <span class="o">-</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageY</span><span class="p">,</span></div><div class="line" id="LC289">								<span class="nx">tx</span> <span class="o">=</span> <span class="nx">scrollL</span> <span class="o">+</span> <span class="nx">startX</span> <span class="o">-</span> <span class="nx">e</span><span class="p">.</span><span class="nx">touches</span><span class="p">[</span> <span class="mi">0</span> <span class="p">].</span><span class="nx">pageX</span><span class="p">,</span></div><div class="line" id="LC290">								<span class="nx">down</span> <span class="o">=</span> <span class="nx">ty</span> <span class="o">&gt;=</span> <span class="p">(</span> <span class="nx">lastTops</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">lastTops</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="o">:</span> <span class="mi">0</span> <span class="p">),</span></div><div class="line" id="LC291">								<span class="nx">right</span> <span class="o">=</span> <span class="nx">tx</span> <span class="o">&gt;=</span> <span class="p">(</span> <span class="nx">lastLefts</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">lastLefts</span><span class="p">[</span> <span class="mi">0</span> <span class="p">]</span> <span class="o">:</span> <span class="mi">0</span> <span class="p">);</span></div><div class="line" id="LC292"><br></div><div class="line" id="LC293">							<span class="c1">// If there's room to scroll the current container, prevent the default window scroll</span></div><div class="line" id="LC294">							<span class="k">if</span><span class="p">(</span> <span class="p">(</span> <span class="nx">ty</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">ty</span> <span class="o">&lt;</span> <span class="nx">scrollHeight</span> <span class="o">-</span> <span class="nx">height</span> <span class="p">)</span> <span class="o">||</span> <span class="p">(</span> <span class="nx">tx</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">tx</span> <span class="o">&lt;</span> <span class="nx">scrollWidth</span> <span class="o">-</span> <span class="nx">width</span> <span class="p">)</span> <span class="p">){</span></div><div class="line" id="LC295">								<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class="line" id="LC296">							<span class="p">}</span></div><div class="line" id="LC297">							<span class="c1">// This bubbling is dumb. Needs a rethink.</span></div><div class="line" id="LC298">							<span class="k">else</span> <span class="p">{</span></div><div class="line" id="LC299">								<span class="nx">changeScrollTarget</span><span class="p">(</span> <span class="nx">touchStartE</span> <span class="p">);</span></div><div class="line" id="LC300">							<span class="p">}</span></div><div class="line" id="LC301"><br></div><div class="line" id="LC302">							<span class="c1">// If down and lastDown are inequal, the y scroll has changed direction. Reset tracking.</span></div><div class="line" id="LC303">							<span class="k">if</span><span class="p">(</span> <span class="nx">lastDown</span> <span class="o">&amp;&amp;</span> <span class="nx">down</span> <span class="o">!==</span> <span class="nx">lastDown</span> <span class="p">){</span></div><div class="line" id="LC304">								<span class="nx">resetVertTracking</span><span class="p">();</span></div><div class="line" id="LC305">							<span class="p">}</span></div><div class="line" id="LC306"><br></div><div class="line" id="LC307">							<span class="c1">// If right and lastRight are inequal, the x scroll has changed direction. Reset tracking.</span></div><div class="line" id="LC308">							<span class="k">if</span><span class="p">(</span> <span class="nx">lastRight</span> <span class="o">&amp;&amp;</span> <span class="nx">right</span> <span class="o">!==</span> <span class="nx">lastRight</span> <span class="p">){</span></div><div class="line" id="LC309">								<span class="nx">resetHorTracking</span><span class="p">();</span></div><div class="line" id="LC310">							<span class="p">}</span></div><div class="line" id="LC311"><br></div><div class="line" id="LC312">							<span class="c1">// remember the last direction in which we were headed</span></div><div class="line" id="LC313">							<span class="nx">lastDown</span> <span class="o">=</span> <span class="nx">down</span><span class="p">;</span></div><div class="line" id="LC314">							<span class="nx">lastRight</span> <span class="o">=</span> <span class="nx">right</span><span class="p">;</span>							</div><div class="line" id="LC315"><br></div><div class="line" id="LC316">							<span class="c1">// set the container's scroll</span></div><div class="line" id="LC317">							<span class="nx">elem</span><span class="p">.</span><span class="nx">scrollTop</span> <span class="o">=</span> <span class="nx">ty</span><span class="p">;</span></div><div class="line" id="LC318">							<span class="nx">elem</span><span class="p">.</span><span class="nx">scrollLeft</span> <span class="o">=</span> <span class="nx">tx</span><span class="p">;</span></div><div class="line" id="LC319"><br></div><div class="line" id="LC320">							<span class="nx">lastTops</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="nx">ty</span> <span class="p">);</span></div><div class="line" id="LC321">							<span class="nx">lastLefts</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span> <span class="nx">tx</span> <span class="p">);</span></div><div class="line" id="LC322"><br></div><div class="line" id="LC323">							<span class="k">if</span><span class="p">(</span> <span class="nx">lastTops</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">3</span> <span class="p">){</span></div><div class="line" id="LC324">								<span class="nx">lastTops</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class="line" id="LC325">							<span class="p">}</span></div><div class="line" id="LC326">							<span class="k">if</span><span class="p">(</span> <span class="nx">lastLefts</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">3</span> <span class="p">){</span></div><div class="line" id="LC327">								<span class="nx">lastLefts</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class="line" id="LC328">							<span class="p">}</span></div><div class="line" id="LC329">						<span class="p">},</span></div><div class="line" id="LC330"><br></div><div class="line" id="LC331">						<span class="c1">// Touchend handler</span></div><div class="line" id="LC332">						<span class="nx">end</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">e</span> <span class="p">){</span></div><div class="line" id="LC333">							<span class="c1">// Apply momentum based easing for a graceful finish</span></div><div class="line" id="LC334">							<span class="nx">finishScroll</span><span class="p">();</span>	</div><div class="line" id="LC335">							<span class="c1">// Bring the pointers back</span></div><div class="line" id="LC336">							<span class="nx">setPointers</span><span class="p">(</span> <span class="s2">"auto"</span> <span class="p">);</span></div><div class="line" id="LC337">							<span class="nx">setTimeout</span><span class="p">(</span> <span class="kd">function</span><span class="p">(){</span></div><div class="line" id="LC338">								<span class="nx">setPointers</span><span class="p">(</span> <span class="s2">"none"</span> <span class="p">);</span></div><div class="line" id="LC339">							<span class="p">},</span> <span class="mi">450</span> <span class="p">);</span></div><div class="line" id="LC340">							<span class="nx">elem</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span> <span class="s2">"touchmove"</span><span class="p">,</span> <span class="nx">move</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class="line" id="LC341">							<span class="nx">elem</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span> <span class="s2">"touchend"</span><span class="p">,</span> <span class="nx">end</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class="line" id="LC342">						<span class="p">};</span></div><div class="line" id="LC343"><br></div><div class="line" id="LC344">					<span class="nx">elem</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s2">"touchmove"</span><span class="p">,</span> <span class="nx">move</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class="line" id="LC345">					<span class="nx">elem</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s2">"touchend"</span><span class="p">,</span> <span class="nx">end</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class="line" id="LC346">				<span class="p">};</span></div><div class="line" id="LC347"><br></div><div class="line" id="LC348">			<span class="c1">// Bind to touch, handle move and end within</span></div><div class="line" id="LC349">			<span class="nx">doc</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span> <span class="s2">"touchstart"</span><span class="p">,</span> <span class="nx">start</span><span class="p">,</span> <span class="kc">false</span> <span class="p">);</span></div><div class="line" id="LC350">		<span class="p">};</span></div><div class="line" id="LC351"><br></div><div class="line" id="LC352">	<span class="c1">// Expose overthrow API</span></div><div class="line" id="LC353">	<span class="nx">w</span><span class="p">.</span><span class="nx">overthrow</span> <span class="o">=</span> <span class="p">{</span></div><div class="line" id="LC354">		<span class="nx">set</span><span class="o">:</span> <span class="nx">enable</span><span class="p">,</span></div><div class="line" id="LC355">		<span class="nx">forget</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){},</span></div><div class="line" id="LC356">		<span class="nx">easing</span><span class="o">:</span> <span class="nx">defaultEasing</span><span class="p">,</span></div><div class="line" id="LC357">		<span class="nx">toss</span><span class="o">:</span> <span class="nx">toss</span><span class="p">,</span></div><div class="line" id="LC358">		<span class="nx">intercept</span><span class="o">:</span> <span class="nx">intercept</span><span class="p">,</span></div><div class="line" id="LC359">		<span class="nx">closest</span><span class="o">:</span> <span class="nx">closest</span><span class="p">,</span></div><div class="line" id="LC360">		<span class="nx">support</span><span class="o">:</span> <span class="nx">overflowProbablyAlreadyWorks</span> <span class="o">?</span> <span class="s2">"native"</span> <span class="o">:</span> <span class="nx">canBeFilledWithPoly</span> <span class="o">&amp;&amp;</span> <span class="s2">"polyfilled"</span> <span class="o">||</span> <span class="s2">"none"</span></div><div class="line" id="LC361">	<span class="p">};</span></div><div class="line" id="LC362"><br></div><div class="line" id="LC363">	<span class="c1">// Auto-init</span></div><div class="line" id="LC364">	<span class="nx">enable</span><span class="p">();</span></div><div class="line" id="LC365"><br></div><div class="line" id="LC366"><span class="p">})(</span> <span class="k">this</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </tbody></table>
  </div>

          </div>
        </div>
      </div>
  </div>
  <br style="clear:both;">


<br style="clear:both;">

<div class="frame frame-loading large-loading-area" style="display:none;">
  <img alt="Octocat-spinner-128" height="64" src="./overthrow_files/octocat-spinner-128.gif" width="64">
</div>


  </div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com/">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com/">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com/">The Shop</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">© 2012 <span title="0.12565s from fe18.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style="display:none">
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style="display:none">
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style="display:none">
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style="display:none">
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style="display:none">
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane">
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane">
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style="display:none">
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style="display:none">
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre># This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>As Kanye West said:

&gt; We're living the future so
&gt; the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id="server_response_time" data-time="0.12710" data-host="fe18"></span>
    
  


<div id="global-clippy-instance" style="display: none;"></div><div id="global-clippy-flash-bug" style="position: absolute; left: -9999px; top: -9999px; z-index: 9998; width: 14px; height: 14px;" data-copied-title="copied!" original-title="copy to clipboard"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-clippy-object-tag" width="100%" height="100%">
  <param name="movie" value="/flash/clippy.swf">
  <param name="FlashVars" value="id=global-clippy-instance">
  <param name="allowScriptAccess" value="always">
  <param name="scale" value="exactfit">

  <embed src="/flash/clippy.swf" width="100%" height="100%" name="global-clippy-object-tag" flashvars="id=global-clippy-instance" allowscriptaccess="always" scale="exactfit">
  

</object></div>    <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="https://github.com/filamentgroup/Overthrow/blob/master/overthrow.js#" class="close"><span class="mini-icon mini-icon-remove-close"></span></a>       </div>     </div></body></html>